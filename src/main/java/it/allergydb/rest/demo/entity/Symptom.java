package it.allergydb.rest.demo.entity;

/**
 * 
 * @author rvoyat
 *
 */
public class Symptom {
	
	private String key;
	private Integer severity;
	private Integer frequency;
	
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public Integer getSeverity() {
		return severity;
	}
	public void setSeverity(Integer severity) {
		this.severity = severity;
	}
	public Integer getFrequency() {
		return frequency;
	}
	public void setFrequency(Integer frequency) {
		this.frequency = frequency;
	}
	

}
