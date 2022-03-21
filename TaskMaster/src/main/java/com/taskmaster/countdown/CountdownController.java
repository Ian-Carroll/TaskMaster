package com.taskmaster.countdown;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

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
		model.put("state", "Break");
		model.put("display", "none");
		return "countdown";
	}
	
	@GetMapping("/config_countdown")
	public String getConfigCountdownView(ModelMap model, CountdownDto countdownDto)
	{
		return "config_countdown";
	}

}
