import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@Inject("user_repo") private readonly usersRepository: typeof User) { }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.findAll()
    }

    async createUser(createUserDto): Promise<any> {
        let createdUser = await this.usersRepository.create<User>(createUserDto);
        return createdUser;
    }
}
