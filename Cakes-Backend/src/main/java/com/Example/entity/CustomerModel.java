package com.Example.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer_model")
public class CustomerModel {
	@Id
	 private String email;
    private String userName;
    private String password;
    private int registrationCode;
    private String confirmPassword;
    private String gender;
    private String address;
    private String phoneNumber;

    public CustomerModel() {

    }

    public CustomerModel(String userName, String email, String password, int registrationCode, String confirmPassword,
                         String gender,  String address, String phoneNumber) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.registrationCode = registrationCode;
        this.confirmPassword = confirmPassword;
        this.gender = gender;

        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    // Getters and Setters
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getRegistrationCode() {
        return registrationCode;
    }

    public void setRegistrationCode(int registrationCode) {
        this.registrationCode = registrationCode;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
