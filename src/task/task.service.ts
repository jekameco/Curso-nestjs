/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
	getTasks() {
		return ['hola', 'mundo'];
	}

	createTask(){
		return 'creando t'
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
