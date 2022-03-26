package com.taskmaster.countdown;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CountdownController
{
	@GetMapping("/")
	public String getCountdownView (ModelMap model, CountdownDto countdownDto)
	{
		if (countdownDto.getState() == null)
		{
			countdownDto.setState("Work");
		}
		countdownDto.setSessionTimeSecs(0);
		model.put("state", "Break");
		model.put("display", "none");
		return "countdown";
	}
	
	@GetMapping("/config_countdown")
	public String getConfigCountdownView(ModelMap model)
	{
		model.put("countdownDto", new CountdownDto());
		return "config_countdown";
	}
	
	@PostMapping("/config_countdown")
	public String configCountdownSubmit(ModelMap model, @ModelAttribute CountdownDto countdownDto)
	{
		countdownDto.setState("Work");
		model.put("countdownDto", countdownDto);
		return "countdown";
	}
	
}
