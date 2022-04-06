package com.taskmaster.todo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;


// TodoController is responsible for handling HTTP Get/Post requests for
// the todo and newtask pages.
@Controller
public class TodoController {
	
	// Returns the todo.html template on get request.
	@GetMapping("/todo")
	public String getTodoView(ModelMap model, TodoDto todoDto)
	{
		model.put("todoDto", todoDto);
		return "todo";
	}
	
	// Submits the todoDto data, transferring the user from todo
	// page to newtask page.
	@PostMapping("/todo")
	public String TodoSubmit(ModelMap model, TodoDto todoDto)
	{
		return "newtask";
	}
	
	// Returns the newtask.html template on get request.
	@GetMapping("/todo/newtask")
	public String getTodoNewtaskView(ModelMap model, TodoDto todoDto)
	{
		model.put("todoDto",todoDto);
		return "newtask";
	}	
	
	// Submits the todoDto data, transferring the user from newtask page
	// to todo page.
	@PostMapping("/todo/newtask")
	public String NewTaskSubmit(ModelMap model, @ModelAttribute TodoDto todoDto) {
		model.put("todoDto",todoDto);
		return "todo";
	}
}