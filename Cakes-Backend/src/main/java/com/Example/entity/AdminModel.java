package com.Example.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin_model")
public class AdminModel {
	@Id
	String name;
	String email;
	String password;
	
	public AdminModel() {
		
	}
	
	public AdminModel(String name, String email, String password ) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	

}

