import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {

    }

    @Post()
    public async createUser(@Body() body: any): Promise<any> {
        return this.usersService.createUser(body);
    }
    @Get()
    public async getAllUsers(@Body() body: any): Promise<User[]> {
        return this.usersService.getAllUsers();
    }
}
