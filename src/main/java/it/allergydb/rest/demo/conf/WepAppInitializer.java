package it.allergydb.rest.demo.conf;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class WepAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
	@Override
	protected Class[] getRootConfigClasses() {
		return new Class[] { SpringConfig.class , SecurityJavaConfig.class };
	}

	@Override
	protected Class[] getServletConfigClasses() {
		return null;
	}

	@Override
	protected String[] getServletMappings() {
		return new String[] { "/*" };
	}
	
	
}
