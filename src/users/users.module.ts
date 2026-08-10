import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from '../auth/auth.module';
import { forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
@Module({
    controllers: [UserController],
    providers: [UsersService],
    exports: [UsersService],
    imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])]

})

export class UserModule { }