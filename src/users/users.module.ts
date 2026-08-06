import { Module } from '@nestjs/common';
import { UserController } from './users.controller';

class MockUserService {
    findUser() {
        return ['user1', 'user2'];
    }
}
@Module({
    controllers: [UserController],

})

export class UserModule { }