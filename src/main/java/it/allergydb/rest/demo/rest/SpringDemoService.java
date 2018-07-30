package it.allergydb.rest.demo.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpringDemoService {
	
	@GetMapping("/api/demo")
	public ResponseEntity authenticateUser() {

		return new ResponseEntity(HttpStatus.OK);
	}
}
