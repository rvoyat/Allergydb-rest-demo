/**
 * 
 */
package it.allergydb.rest.demo.entity;


/**
 * @author rvoyat
 *
 */ 
public class AllergyPrediction {
	 
	private String allergene;
	private Symptom[] symptoms;
	private String prediction;
	private String error;
	 
	public String getAllergene() {
		return allergene;
	}
	public void setAllergene(String allergene) {
		this.allergene = allergene;
	} 
	public String getPrediction() {
		return prediction;
	}
	public void setPrediction(String prediction) {
		this.prediction = prediction;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public Symptom[] getSymptoms() {
		return symptoms;
	}
	public void setSymptoms(Symptom[] symptoms) {
		this.symptoms = symptoms;
	}
	 
	
	

}
