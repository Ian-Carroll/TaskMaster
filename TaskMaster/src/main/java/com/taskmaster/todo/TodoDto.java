package com.taskmaster.todo;

import java.util.ArrayList;

public class TodoDto {
private ArrayList<Task> tasks;


public void setTasks(ArrayList<Task> tasks) {
	this.tasks = tasks;
}

public ArrayList<Task> getTasks() {
	return tasks;
}

}
