package it.allergydb.rest.demo.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
 
public class Utente {

	private Long utenteId;
	private String login;
	private String password;
	private String nome;
	private String cognome;
	private String email;
	private String telefono;
	private String telefonoCell;
	private String note;
	private Boolean stato;
	private Date dataScadenzaPassword;
 
	 
	private Set<Gruppo> gruppi = new HashSet<>(0);

	public Long getUtenteId() {
		return utenteId;
	}

	public void setUtenteId(Long utenteId) {
		this.utenteId = utenteId;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getTelefonoCell() {
		return telefonoCell;
	}

	public void setTelefonoCell(String telefonoCell) {
		this.telefonoCell = telefonoCell;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Boolean getStato() {
		return stato;
	}

	public void setStato(Boolean stato) {
		this.stato = stato;
	}

	public Date getDataScadenzaPassword() {
		return dataScadenzaPassword;
	}

	public void setDataScadenzaPassword(Date dataScadenzaPassword) {
		this.dataScadenzaPassword = dataScadenzaPassword;
	}
 

	public Set<Gruppo> getGruppi() {
		return gruppi;
	}

	public void setGruppi(Set<Gruppo> gruppi) {
		this.gruppi = gruppi;
	}
	
	

}
