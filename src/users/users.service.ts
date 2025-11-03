import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
	private users = [
		{
			id:1,
			name:"jhon doe"
		},
		{
			id:2,
			name:"jhon doe"
		}
	]
	getUsers(){
		return this.users;
	}

	createUser(user: CreateUserDto){
		console.log('User created');
		return "my name is jhon doe";
	}
}
