package com.taskmaster.todo;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class TodoController {
	
	@GetMapping("/")
	public String getTodoView(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto)
	{
		if (todoDto.getTasks().size() == 0)
		{
			Task placeholder = new Task();
			placeholder.setName("placeholder");
			todoDto.addTask(placeholder);
		}
		todoDto.defaultTask();
		model.put("todoDto", todoDto);
		model.put("taskArray", todoDto.getTasks());
		return "todo";
	}
	
	@PostMapping("/")
	public String TodoSubmit(ModelMap model, @ModelAttribute("todoDto") TodoDto todoDto)
	{
		//ArrayList<Task> tasks = todoDto.getTasks();
		model.put("todoDto", todoDto);
		return "newtask";
	}
	
	@GetMapping("/todo/newtask")
	public String getTodoNewtaskView(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto)
	{
		model.put("task", new Task());
		model.put("todoDto",todoDto);
		return "newtask";
	}	
	
	@PostMapping("/todo/newtask")
	public String NewTaskSubmit(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto) {
		todoDto.addTask(task);
		model.put("task",task);
		model.put("todoDto",todoDto);
		return "todo";
	}
}