package com.taskmaster.todo;

// Task class is used to store the task specific Data (name, comment, priority, dueDate
import java.time.LocalDate;

public class Task {
	private String name;
	private String comment;
	private Priority priority;
	private LocalDate dueDate;
	
	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Priority getPriority() {
		return priority;
	}

	public void setPriority(Priority priority) {
		this.priority = priority;
	}

	public LocalDate getDueDate() {
		return dueDate;
	}

	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}

}

