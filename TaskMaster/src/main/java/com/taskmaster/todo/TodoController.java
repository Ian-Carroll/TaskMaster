package com.taskmaster.todo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class TodoController {
	@GetMapping("/todo")
	public String getTodoView(ModelMap model, TodoDto todoDto)
	{
		model.put("todoDto", todoDto);
		return "todo";
	}
	@PostMapping("/todo")
	public String TodoSubmit(ModelMap model, TodoDto todoDto)
	{
		return "newtask";
	}
	@GetMapping("/todo/newtask")
	public String getTodoNewtaskView(ModelMap model, TodoDto todoDto)
	{
		model.put("todoDto",todoDto);
		return "newtask";
	}	
	@PostMapping("/todo/newtask")
	public String NewTaskSubmit(ModelMap model, @ModelAttribute TodoDto todoDto) {
		model.put("todoDto",todoDto);
		return "todo";
	}
}