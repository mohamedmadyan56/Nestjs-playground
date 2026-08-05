import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';

class MockUserService {
    findUser() {
        return ['user1', 'user2'];
    }
}
@Module({
    controllers: [UserController],
    providers: [
        {
            provide: UserService,
            useValue: new MockUserService(),

        }
    ]
})

export class UserModule { }