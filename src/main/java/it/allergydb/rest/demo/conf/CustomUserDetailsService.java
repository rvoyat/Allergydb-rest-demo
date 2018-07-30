package it.allergydb.rest.demo.conf;

import it.allergydb.rest.demo.entity.Gruppo;
import it.allergydb.rest.demo.entity.Utente;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
 

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Utente utente = new Utente();
		utente.setLogin(username);

		if (utente == null) {
			throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
		} else {
			return new CustomUserDetails(utente,mapToGrantedAuthorities(utente.getGruppi()));
		}
	}

	private List<GrantedAuthority> mapToGrantedAuthorities(Set<Gruppo> gruppi) {
		List<GrantedAuthority> authorities = new ArrayList<>(); 
		return authorities;
	}

}
