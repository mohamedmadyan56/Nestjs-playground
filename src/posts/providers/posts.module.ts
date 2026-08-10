import { Module, Post } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from '../posts.service';
import { UserModule } from '../../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UserModule, TypeOrmModule.forFeature([Post])]
})
export class PostsModule { }
