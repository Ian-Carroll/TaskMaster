package com.taskmaster.todo;

// TodoDto handles the storage of data on the todo page. It contains multiple tasks.
public class TodoDto {
	private Task task0 = new Task();
	private Task task1 = new Task();
	private Task task2 = new Task();
	private Task task3 = new Task();
	private Task task4 = new Task();

	public Task getTask0() {
		return task0;
	}

	public void setTask0(Task task0) {
		this.task0 = task0;
	}

	public Task getTask1() {
		return task1;
	}

	public void setTask1(Task task1) {
		this.task1 = task1;
	}

	public Task getTask2() {
		return task2;
	}

	public void setTask2(Task task2) {
		this.task2 = task2;
	}

	public Task getTask3() {
		return task3;
	}

	public void setTask3(Task task3) {
		this.task3 = task3;
	}

	public Task getTask4() {
		return task4;
	}

	public void setTask4(Task task4) {
		this.task4 = task4;
	}
}