package com.doggy.spa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class SpaApplication implements ErrorController {
	private static final String PATH = "/error";

	public static void main(String[] args) {
		SpringApplication.run(SpaApplication.class, args);
	}

	@RequestMapping(value = PATH)
	public String error() {
		return "forward:/index.html";
	}

}
