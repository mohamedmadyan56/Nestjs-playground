import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from '../auth/auth.module';
import { forwardRef } from '@nestjs/common';
@Module({
    controllers: [UserController],
    providers: [UsersService],
    exports: [UsersService],
    imports: [forwardRef(() => AuthModule)]

})

export class UserModule { }