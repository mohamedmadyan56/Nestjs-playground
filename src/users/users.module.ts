import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserSerive } from './providers/users.service';

@Module({
    controllers: [UserController],
    providers: [UserSerive]

})

export class UserModule { }