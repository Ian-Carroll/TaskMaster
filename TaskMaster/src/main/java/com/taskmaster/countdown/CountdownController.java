package com.taskmaster.countdown;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

// CountdownController handles all HTTP GET and POST
// mapping events (i.e. get the website page, or post data through HTML forms)
// from the front-end.
@Controller
public class CountdownController
{
	// Returns the countdown.html template on get request
	@GetMapping("/")
	public String getCountdownView (ModelMap model, CountdownDto countdownDto)
	{
		if (countdownDto.getState() == null)
		{
			countdownDto.setState("Work");
		}
		countdownDto.setSessionTimeSecs(0);
		model.put("countdownDto", countdownDto);
		return "countdown";
	}
	
	// Submits the CountdownDto data, transferring user from countdown page
	// to config_countdown page
	@PostMapping("/config_countdown")
	public String coundownConfigSubmit(ModelMap model, CountdownDto countdownDto)
	{
		countdownDto.setState("Work");
		countdownDto.setSessionTimeSecs(0);
		return "config_countdown";
	}
	
	// Returns the config_countdown.html template on get request
	@GetMapping("/config_countdown")
	public String getConfigCountdownView(ModelMap model, CountdownDto countdownDto)
	{
		countdownDto.setState("Work");
		countdownDto.setSessionTimeSecs(0);
		model.put("countdownDto", countdownDto);
		return "config_countdown";
	}
	
	// Submits the CountdownDto data, transferring user from config_countdown page
	// to countdown page
	@PostMapping("/")
	public String configCountdownSubmit(ModelMap model, @ModelAttribute CountdownDto countdownDto)
	{
		countdownDto.setState("Work");
		model.put("countdownDto", countdownDto);
		return "countdown";
	}
	
}
