package com.taskmaster.todo;

import org.springframework.stereotype.Controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class TodoController {
	@GetMapping("/todo")
	public String getTodoView(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto)
	{
		//if (todoDto.getTasks() == null)
		//{
			//todoDto.addTask(task);
		//}
		// If you comment these lines out the todo list is blank when you enter the page
		//todoDto.addTask(task);
		todoDto.defaultTask();
		model.put("todoDto", todoDto);
		return "todo";
	}
	@PostMapping("/todo")
	public String TodoSubmit(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto)
	{
		model.put("todoDto", todoDto);
		return "newtask";
	}
	@GetMapping("/todo/newtask")
	public String getTodoNewtaskView(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto)
	{
		//model.put("task", new Task());
		//todoDto.addTask(task);
		//todoDto.setTasks(todoDto.getTasks());
		model.put("task", task);
		model.put("todoDto",todoDto);
		return "newtask";
	}	
	@PostMapping("/todo/newtask")
	public String NewTaskSubmit(ModelMap model, @ModelAttribute Task task, @ModelAttribute TodoDto todoDto) {
		//task.setName(task.getName());
		//task.setComment(task.getComment());
		//todoDto.setTasks(todoDto.getTasks());
		todoDto.addTask(task);
		model.put("task",task);
		model.put("todoDto",todoDto);
		return "todo";
	}
}