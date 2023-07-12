package hac.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class Citizen implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    private String address;
    private String city;
    private String zipCode;
    private String landline;
    private String cellPhone;
    private boolean hasCovidHistory;

    // Constructors
    public Citizen() {
    }

    public Citizen(String firstName, String lastName, LocalDate dateOfBirth, String address, String city,
                   String zipCode, String landline, String cellPhone, boolean hasCovidHistory) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.landline = landline;
        this.cellPhone = cellPhone;
        this.hasCovidHistory = hasCovidHistory;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getLandline() {
        return landline;
    }

    public String getCellPhone() {
        return cellPhone;
    }

    public boolean hasCovidHistory() {
        return hasCovidHistory;
    }

    // Setters
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public void setLandline(String landline) {
        this.landline = landline;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    public void setHasCovidHistory(boolean hasCovidHistory) {
        this.hasCovidHistory = hasCovidHistory;
    }

    @Override
    public String toString() {
        return "Citizen{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", landline='" + landline + '\'' +
                ", cellPhone='" + cellPhone + '\'' +
                ", hasCovidHistory=" + hasCovidHistory +
                '}';
    }
}