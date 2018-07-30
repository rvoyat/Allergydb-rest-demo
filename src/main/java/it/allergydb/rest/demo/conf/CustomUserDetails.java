package it.allergydb.rest.demo.conf;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import it.allergydb.rest.demo.entity.Utente;

public class CustomUserDetails implements UserDetails{

	private Collection<? extends GrantedAuthority> authorities;
	private Utente utente;
	
	
	
	public CustomUserDetails(Utente utente, Collection<? extends GrantedAuthority> authorities) {
		super();
		this.authorities = authorities;
		this.utente = utente;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return utente.getPassword();
	}

	@Override
	public String getUsername() {
		return utente.getLogin();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
