import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { USER_REPOSITORY } from 'src/utils/constants';
import * as bcrypt from "bcrypt";


@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly usersRepository: typeof User) { }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.findAll()
    }

    async createUser(createUserDto): Promise<any> {
        createUserDto.password = await bcrypt.hash(createUserDto.password, 12);
        let createdUser = await this.usersRepository.create<User>(createUserDto);
        return createdUser;
    }
    async findUserByEmail(email: any): Promise<User> {
        return this.usersRepository.findOne({
            where: { email: email },
        })
    }
    async getOneUserById(id: number): Promise<User> {
        let company = await this.usersRepository.findOne({
          where: {
            id: id
          },
          attributes: { exclude: ['password'] },
        })
        return company
      }
}
