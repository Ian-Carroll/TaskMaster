package com.taskmaster.todo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TodoController {
	@GetMapping("/Todo")
	public String getTodoView()
	{
		return "todo";
	}
}
