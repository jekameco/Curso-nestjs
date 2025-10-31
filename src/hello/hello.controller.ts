import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('hello')
export class HelloController {

	@Get('/')
	index() {
		return 'home page';
	}
}
