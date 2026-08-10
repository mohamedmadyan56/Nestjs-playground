import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";










@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {

    }





    public async createUser(createUserDto: CreateUserDto) {
        // CHeck if user exists with same email
        const existingUser = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email,
            }


        })

        let newUser = this.usersRepository.create(createUserDto);
        newUser = await this.usersRepository.save(newUser);
        return newUser;

    }





    public findAll(getUserParamDto: GetUsersParamDto, limit: number,
        page: number,) {
        return [
            {
                firstName: 'John',
                email: 'eltop@gmail.com'
            },
            {
                firstName: 'ahmed',
                email: 'ahmed@gmail.com'
            }
        ]
    }



    public findOneById(id: string) {
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'eltop@gmail.com'
        }
    }


}
