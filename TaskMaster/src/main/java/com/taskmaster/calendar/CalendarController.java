package com.taskmaster.calendar;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalendarController {
	
	@GetMapping("/calendar")
	public String getCalendarView(ModelMap model)
	{
		return "calendar";
	}
}
