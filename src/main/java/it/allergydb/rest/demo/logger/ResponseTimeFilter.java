package it.allergydb.rest.demo.logger;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

@WebFilter("/*")
public class ResponseTimeFilter implements Filter{
	
	private static final Logger LOGGER = Logger.getLogger(ResponseTimeFilter.class.getName());

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		long time = System.currentTimeMillis();
        try {
            chain.doFilter(request, response);
        } finally {
            time = System.currentTimeMillis() - time;
            LOGGER.info(String.format("%s: %d ms ", ((HttpServletRequest) request).getRequestURI(),  time));
        }
		
	}

	@Override
	public void destroy() {
		
	}

}
