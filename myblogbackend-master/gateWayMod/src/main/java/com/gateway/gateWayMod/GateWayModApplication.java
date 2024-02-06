package com.gateway.gateWayMod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.reactive.config.CorsRegistry;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200")
public class GateWayModApplication {
	public static void main(String[] args) {

		SpringApplication.run(GateWayModApplication.class, args);
		System.out.println("Gateway running.....");
	}


}
