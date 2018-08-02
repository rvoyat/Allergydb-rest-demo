package it.allergydb.rest.demo.conf;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration; 
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@ComponentScan({ "it.allergydb" })
@EnableWebMvc
@EnableTransactionManagement
public class SpringConfig extends WebMvcConfigurerAdapter {
	/*@Bean
	public DataSource getDataSource() {
		DriverManagerDataSource dm = new DriverManagerDataSource();
		dm.setDriverClassName("org.hsqldb.jdbcDriver");
		dm.setUrl("jdbc:hsqldb:mem:rest");
		dm.setUsername("sa");
		return dm;
	}

	@Bean
	public DataSource getDataSourcePostgresql() {
		DriverManagerDataSource dm = new DriverManagerDataSource();
		dm.setDriverClassName("org.postgresql.Driver");
		dm.setUrl("jdbc:postgresql://localhost:5432/demo");
		dm.setUsername("demo");
		dm.setPassword("demo");
		return dm;
	} 

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		//em.setDataSource(getDataSourcePostgresql());
		em.setPackagesToScan(new String[] { "it.invallee.angular2" });
		JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		em.setJpaProperties(additionalPropertiesPostgresql());
		return em;
	}

	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(emf);
		return transactionManager;
	}*/

	// @Bean
	// public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
	// return new PersistenceExceptionTranslationPostProcessor();
	// }

	Properties additionalProperties() {
		Properties properties = new Properties();
		properties.setProperty("hibernate.dialect", "org.hibernate.dialect.HSQLDialect");
		properties.setProperty("hibernate.flushMode", "FLUSH_AUTO");
		properties.setProperty("hibernate.hbm2ddl.auto", "create");
		properties.setProperty("hibernate.show_sql", "true");
//		properties.setProperty("hibernate.default_schema", "public");

		return properties;
	}

	Properties additionalPropertiesPostgresql() {
		Properties properties = new Properties();
		properties.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect");
		properties.setProperty("hibernate.flushMode", "FLUSH_AUTO");
		properties.setProperty("hibernate.hbm2ddl.auto", "update");
		properties.setProperty("hibernate.show_sql", "true");
		properties.setProperty("hibernate.default_schema", "");

		return properties;
	}

	// @Bean
	// public MappingJackson2HttpMessageConverter
	// mappingJackson2HttpMessageConverter() {
	// ObjectMapper mapper = new ObjectMapper();
	// mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
	// MappingJackson2HttpMessageConverter converter = new
	// MappingJackson2HttpMessageConverter(mapper);
	// return converter;
	// }

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("/");
	}

	public static final int UPLOAD_SIZE = 10000000;

	@Bean(name = "multipartResolver")
	public CommonsMultipartResolver multipartResolver() {
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
		multipartResolver.setMaxUploadSize(UPLOAD_SIZE);
		return new CommonsMultipartResolver();
	}
}
