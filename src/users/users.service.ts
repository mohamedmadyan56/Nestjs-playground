import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from "uuid";

import { UserEntity } from "src/user.entity";
import { CreateUserDto } from "./dtos/create-User.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UserService {
    private users: UserEntity[] = [];

    findUser(): UserEntity[] {
        return this.users;
    }

    findUserById(id: string): UserEntity {
        const user = this.users.find((user) => user.id === id);

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        return user;
    }

    createUser(createUserDto: CreateUserDto): UserEntity {
        const newUser: UserEntity = {
            ...createUserDto,
            id: uuid(),
        };

        this.users.push(newUser);

        return newUser;
    }

    updateUser(id: string, updateUserDto: UpdateUserDto): UserEntity {
        // نجيب المستخدم أو نرمي NotFoundException
        const user = this.findUserById(id);

        // نحدث البيانات المرسلة فقط
        Object.assign(user, updateUserDto);

        return user;
    }

    deleteUser(id: string): void {
        const index = this.users.findIndex((user) => user.id === id);

        if (index === -1) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        this.users.splice(index, 1);
    }
}