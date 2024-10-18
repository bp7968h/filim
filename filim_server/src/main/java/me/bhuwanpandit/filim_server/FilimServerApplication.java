package me.bhuwanpandit.filim_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class FilimServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FilimServerApplication.class, args);
	}

	@GetMapping("/")
	public String api_root() {
		return "Hello Root!";
	}
	
	@GetMapping("/hello")
	public String hello_word() {
		return "Hello World!";
	}
}
