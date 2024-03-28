package com.chanvitha.springbootTestProject_2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SpringbootTestProject2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootTestProject2Application.class, args);
	}

	//configure cors errors in cross origins
	@Bean
	public WebMvcConfigurer configure(){
		return new WebMvcConfigurer(){
			@Override
			public void addCorsMappings(CorsRegistry reg){
				reg.addMapping("/**").allowedOrigins("*").allowedMethods("GET","POST","PUT","DELETE");
			}
		};
	}
}

