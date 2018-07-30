/**
 * 
 */
package it.allergydb.rest.demo.entity;

import javax.persistence.Entity;

/**
 * @author rvoyat
 *
 */ 
public class AllergyResult {
	
	private Long id;
	private String result;
	private String perc;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getPerc() {
		return perc;
	}
	public void setPerc(String perc) {
		this.perc = perc;
	}
	
	

}
