import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';

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
	createTask(@Body() task: CreateTaskDto) {
		console.log(task);
		return this.taskService.createTask(task);
	}

	@Put()
	updateTask(@Body() task: UpdateTaskDto) {
		return this.taskService.updateTask(task);
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
