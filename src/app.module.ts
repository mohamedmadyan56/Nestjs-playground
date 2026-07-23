import { Module } from '@nestjs/common';
import { UserController } from './users/users.controller';

@Module({
	controllers: [UserController],
})
export class AppModule {}