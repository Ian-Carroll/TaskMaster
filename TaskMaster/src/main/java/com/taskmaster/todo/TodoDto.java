package com.taskmaster.todo;

import java.util.ArrayList;

public class TodoDto {
private ArrayList<Task> tasks = new ArrayList<Task>( );


public void setTasks(ArrayList<Task> tasks) {
	this.tasks = tasks;
}

public ArrayList<Task> getTasks() {
	return tasks;
}

public void addTask(Task task) {
	tasks.add(task);
}
}
