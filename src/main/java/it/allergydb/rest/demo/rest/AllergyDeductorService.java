package it.allergydb.rest.demo.rest;

import it.allergydb.rest.demo.entity.AllergyResult;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AllergyDeductorService { 

	@RequestMapping(value = "/api/allergyDeductor", params = { "idRequest","allergene", "symptoms" }, method = RequestMethod.POST)
	public ResponseEntity<AllergyResult> elencoGruppi(@RequestParam("idRequest") Long idRequest,
			@RequestParam("allergene") String allergene, @RequestParam("symptoms") String symptoms ) {

		//TODO MLLib

		AllergyResult resultPage = new AllergyResult(); 
		resultPage.setId(idRequest);
		resultPage.setResult("POSITIVO");
		resultPage.setPerc("95");

		return new ResponseEntity<>(resultPage, HttpStatus.OK);
	}

	 
}
