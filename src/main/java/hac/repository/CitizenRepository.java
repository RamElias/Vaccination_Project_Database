package hac.repository;

import hac.model.Citizen;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface CitizenRepository extends JpaRepository<Citizen, Long> {
    List<Citizen> findByDateOfBirthBetweenAndCity(LocalDate fromDate, LocalDate toDate, String city);

    List<Citizen> findByDateOfBirthBetween(LocalDate fromDate, LocalDate toDate);

    List<Citizen> findByCity(String city);
}

