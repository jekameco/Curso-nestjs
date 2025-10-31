import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

// @Controller('task')
@Controller('task')
export class TaskController {
	taskService: TaskService;

	constructor(taskService: TaskService) {
		this.taskService = taskService;
	}

	@Get()
	getAllTask() {
		return this.taskService.getTasks();
	}

	@Post()
	createTask() {
		return this.taskService.createTask();
	}

	@Put()
	updateTask() {
		return this.taskService.updateTask();
	}

	@Delete()
	deleteTask() {
		return this.taskService.deleteTask();
	}

	@Patch()
	patchTask() {
		return this.taskService.patchTask();
	}
}
