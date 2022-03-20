package com.taskmaster.todo;

import org.springframework.stereotype.Controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class TodoController {
	@GetMapping("/todo")
	public String getTodoView(ModelMap model)
	{
		return "todo";
	}
	
	@GetMapping("/todo/newtask")
	public String getTodoNewtaskView(ModelMap model)
	{
		return "newtask";
	}
	
	
	
	
}
