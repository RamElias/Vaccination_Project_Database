package hac.controllers;

import hac.model.Citizen;
import hac.repository.CitizenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/citizens")
public class CitizenController {
    private final CitizenRepository citizenRepository;

    @Autowired
    public CitizenController(CitizenRepository citizenRepository) {
        this.citizenRepository = citizenRepository;
    }

    @PostMapping
    public Citizen registerCitizen(@RequestBody Citizen citizen) {
        return citizenRepository.save(citizen);
    }

    @GetMapping
    public List<Citizen> getAllCitizens(
            @RequestParam(value = "fromDate", required = false) LocalDate fromDate,
            @RequestParam(value = "toDate", required = false) LocalDate toDate,
            @RequestParam(value = "city", required = false) String city
    ) {
        if (fromDate != null && toDate != null && city != null) {
            // Filter by fromDate, toDate, and city
            return citizenRepository.findByDateOfBirthBetweenAndCity(fromDate, toDate, city);
        } else if (fromDate != null && toDate != null) {
            // Filter by fromDate and toDate
            return citizenRepository.findByDateOfBirthBetween(fromDate, toDate);
        } else if (city != null) {
            // Filter by city
            return citizenRepository.findByCity(city);
        } else {
            // No filters applied, return all citizens
            return citizenRepository.findAll();
        }
    }
}
