package com.Example.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Example.DAO.CustomerDAO;
import com.Example.entity.CustomerModel;
@Service ("CustomerServiceV2")
public class CustomerService {
	@Autowired
    CustomerDAO cd;
	public List<CustomerModel> getAllUsers() {
		return cd.findAll() ;
	}

	public void saveUser(CustomerModel c) {
		 cd.save(c);
	}
	public CustomerModel fetchUserByEmail(String email) {
		return cd.findByEmail(email);
	}
	public CustomerModel fetchUserByEmailAndPassword(String email,String password) {
		return cd.findByEmailAndPassword(email,password);
	}
	

}