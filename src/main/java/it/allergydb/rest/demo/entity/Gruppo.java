package it.allergydb.rest.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "t_gruppo")
public class Gruppo {
	private Long gruppoId;
	private String nome;
	private String descrizione;
	  
	public Long getGruppoId() {
		return gruppoId;
	}

	public void setGruppoId(Long gruppoId) {
		this.gruppoId = gruppoId;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
 
 

}
