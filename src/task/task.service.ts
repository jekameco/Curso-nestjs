
import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
	name: string;
	age: number;
}
@Injectable()
export class TaskService {
	private tasks: any[] = [];
	getTasks() {
		return this.tasks;
	}

	getTask(id: number) {
		let taksFound = this.tasks.find((task) => task.id === id);

		if(!taksFound){
			return new NotFoundException(`Task with id ${id} not found`);
		}

		return taksFound;
	}

	createTask(task: any) {
		console.log(task);
		this.tasks.push({
			...task,
			id: this.tasks.length + 1,
		});
		return task;
	}

	updateTask(){
		return 'actualizando t'
	}

	deleteTask(){
		return 'eliminando t'
	}

	patchTask(){
		return 'actualizacion parcial t'
	}
}
