package com.taskmaster.todo;

import org.springframework.stereotype.Controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class TodoController {
	@GetMapping("/todo")
	public String getTodoView(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto)
	{
		if (todoDto.getTasks() == null)
		{
			todoDto.addTask(task);
		}
		// If you comment these lines out the todo list is blank when you enter the page
		//todoDto.addTask(task);
		//todoDto.setTasks(todoDto.getTasks());
		//model.put("todoDto", todoDto);
		return "todo";
	}
	@GetMapping("/todo/newtask")
	public String getTodoNewtaskView(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto)
	{
		//model.put("task", new Task());
		todoDto.addTask(task);
		todoDto.setTasks(todoDto.getTasks());
		model.put("task", task);
		model.put("todoDto",todoDto);
		return "newtask";
	}	
	@PostMapping("/todo/newtask")
	public String NewTaskSubmit(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto) {
		task.setName(task.getName());
		task.setComment(task.getComment());
		todoDto.addTask(task);
		todoDto.setTasks(todoDto.getTasks());
		model.put("task",task);
		model.put("todoDto",todoDto);
		return "todo";
	}
}
