package it.allergydb.rest.demo.rest;

import it.allergydb.mllib.LSVMSpark;
import it.allergydb.mllib.NaiveBayesSpark;
import it.allergydb.rest.demo.entity.AllergyPrediction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 
 * @author rvoyat
 *
 */
@RestController
public class AllergyDeductorService { 
	
	@Autowired
	private LSVMSpark sparkmllib;

	@Autowired
	private NaiveBayesSpark naiveBayesSpark;
 
	@RequestMapping(value = "/api/predictAllergy", params = { "idRequest" },   method = RequestMethod.POST)
	public ResponseEntity<AllergyPrediction> predictAllergy(@RequestParam("idRequest") Long idRequest,@RequestBody AllergyPrediction allergyPrediction ) {
 
		HttpStatus status;
		try{
			String prediction = sparkmllib.runModel(allergyPrediction.getAllergene(), allergyPrediction.getSymptoms());
			allergyPrediction.setPrediction(prediction); 
			status =HttpStatus.OK;
		}catch(Exception e ){
			e.printStackTrace();
			allergyPrediction.setError("ELABORATION ERROR:"+e.getMessage()); 
			status =HttpStatus.BAD_REQUEST;
		}


		return new ResponseEntity<>(allergyPrediction,status);
	}
	 
		@RequestMapping(value = "/api/predictAllergy", params = { "idRequest" },   method = RequestMethod.POST)
		public ResponseEntity<AllergyPrediction> predictAllergyNB(@RequestParam("idRequest") Long idRequest,
				@RequestBody AllergyPrediction allergyPrediction ) {
	 
			HttpStatus status;
			try{
				String prediction = naiveBayesSpark.runModel(allergyPrediction.getAllergene(), allergyPrediction.getSymptoms());
				allergyPrediction.setPrediction(prediction); 
				status =HttpStatus.OK;
			}catch(Exception e ){
				e.printStackTrace();
				allergyPrediction.setError("ELABORATION ERROR:"+e.getMessage()); 
				status =HttpStatus.BAD_REQUEST;
			}


			return new ResponseEntity<>(allergyPrediction,status);
		}

	 
}
