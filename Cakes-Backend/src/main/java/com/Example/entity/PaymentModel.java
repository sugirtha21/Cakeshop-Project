package com.Example.entity;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="payment_model")
public class PaymentModel {
	@Id
	@GenericGenerator(name="xyz",strategy="increment")
	@GeneratedValue(generator="xyz")
	   int quantity;
		String name;
		String address;
		long phoneNo;
		int zipCode;
	    int Total;
		 String cname;
	    public PaymentModel() {
	    	
	    }
	    
		public PaymentModel(int quantity, String name, String cname, String address,  long phoneNo, int zipCode,
			int Total) {
			super();
			this.quantity = quantity;
			this.name = name;
			this.cname = cname;
			this.address = address;
			this.phoneNo = phoneNo;
			this.zipCode = zipCode;
			this.Total = Total;
		}

		public int getQuantity() {
			return quantity;
		}
		public void setquantity(int quantity) {
			this.quantity = quantity;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getCName() {
			return cname;
		}
		public void setCName(String cname) {
			this.cname = cname;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}

		public long getPhoneNo() {
			return phoneNo;
		}
		public void setPhoneNo(long phoneNo) {
			this.phoneNo = phoneNo;
		}
		public int getZipCode() {
			return zipCode;
		}
		public void setZipCode(int zipCode) {
			this.zipCode = zipCode;
		}
		public int getTotal() {
			return Total;
		}
		public void setTotal(int Total) {
			this.Total = Total;
		}
	    
						
	}
