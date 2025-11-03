import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller()
export class UsersController {
	
    constructor(private usersService: UsersService){
        this.usersService = usersService;
    }

    
    @Get('/users')
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post('/users')
    createUsers(@Body() user: CreateUserDto){
		console.log(':D');
		console.log(user);
        return this.usersService.createUser(user);
    }
}
