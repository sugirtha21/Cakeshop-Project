package com.Example.controll;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Example.DAO.LaptopDAO;
import com.Example.entity.LaptopModel;

import com.Example.Service.LaptopService;

@RestController
//@CrossOrigin(origins="http://localhost:4200")
public class LaptopControll {
	@Autowired
	LaptopService ls;
	@GetMapping("laptops")
	@CrossOrigin(origins="http://localhost:4200")
	//@RequestMapping(value="/users",method=RequestMethod.GET)
	public List<LaptopModel> getUsers() {
		return ls.getAllLaptops();
	}
	
	@PostMapping("products")
	@CrossOrigin(origins="http://localhost:4200")
	public void saveLap(@RequestBody LaptopModel l)throws Exception {

		ls.saveL(l);
			}
	@PostMapping("updateL")
	@CrossOrigin(origins="http://localhost:4200")
	public void updateLap(@RequestBody LaptopModel l)throws Exception {

		ls.saveLap(l);
	}
	/*private LaptopDAO ld;
	@RequestMapping(value="/laptops/count",method=RequestMethod.GET)
	
	public long getcount() {
		return ld.count();
	}*/
	@PostMapping("deleteL")
	@CrossOrigin(origins="http://localhost:4200")
   public void deleteL(@RequestBody LaptopModel productname) {
	    ls.deletelap(productname);
	}
	
}