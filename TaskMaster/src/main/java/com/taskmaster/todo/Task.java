package com.taskmaster.todo;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.web.client.RestTemplate;
public class Task {
	private String name;
	private ArrayList<String> comments;
	private Priority priority;
	private LocalDate due_date;
	
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ArrayList<String> getComments() {
		return comments;
	}

	public void setComments(ArrayList<String> comments) {
		this.comments = comments;
	}

	public Priority getPriority() {
		return priority;
	}

	public void setPriority(Priority priority) {
		this.priority = priority;
	}

	public LocalDate getDue_date() {
		return due_date;
	}

	public void setDue_date(LocalDate due_date) {
		this.due_date = due_date;
	}

}

