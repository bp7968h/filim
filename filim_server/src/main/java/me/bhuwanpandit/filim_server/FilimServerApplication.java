package me.bhuwanpandit.filim_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.HashMap;

@SpringBootApplication
@RestController
public class FilimServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FilimServerApplication.class, args);
	}

	@GetMapping
    public ResponseEntity<Map<String, String>> root() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "ok");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
