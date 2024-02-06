package com.serverEureka.serverEureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableEurekaServer
public class ServerEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerEurekaApplication.class, args);
		System.out.println("Eureka Server running......");
	}

}
