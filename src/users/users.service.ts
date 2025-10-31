import { Injectable } from '@nestjs/common';

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
}
