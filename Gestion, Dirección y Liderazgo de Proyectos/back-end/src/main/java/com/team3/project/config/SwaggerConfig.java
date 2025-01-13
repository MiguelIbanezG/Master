package com.team3.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

/**
 * SwaggerConfig is a configuration class that sets up Swagger for API
 * documentation. It uses
 * Spring's @Configuration to indicate that it is a source of bean definitions.
 */
@Configuration
public class SwaggerConfig {

  /**
   * Creates a custom OpenAPI bean that defines the API documentation details.
   *
   * @return an OpenAPI object containing the API information and external
   *         documentation
   */
  @Bean
  public OpenAPI customOpenAPI() {
    return new OpenAPI()
        .info(
            new Info()
                .title("Spring Boot 3 API")
                .version("v1.0")
                .description("Sample API documentation for Spring Boot 3")
                .license(new License().name("Apache 2.0")
                    .url("http://springdoc.org")))
        .externalDocs(
            new ExternalDocumentation()
                .description("Spring Boot 3 Documentation")
                .url("https://spring.io/projects/spring-boot"));
  }
}
