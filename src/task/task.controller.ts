import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TaskService } from './task.service';

// @Controller('task')
@Controller('task')
export class TaskController {
	taskService: TaskService;

	constructor(taskService: TaskService) {
		this.taskService = taskService;
	}

	@Get()
	getAllTask(@Query() query: any){
		console.log(query);
		return this.taskService.getTasks();
	}

	@Get('/:id')
	getTask(@Param('id') id: string) {
		console.log(id);
		return this.taskService.getTask(parseInt(id));
	}

	@Post()
	createTask(@Body() task: any) {
		console.log(task);
		return this.taskService.createTask(task);
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
