import { Controller, Get, Post, Param } from '@nestjs/common';
import { PostsService } from '../posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {

    }








    @Get('{:userId}')
    getPosts(@Param('userId') userId: string) {
        return this.postService.findAll(userId);
    }


    @Post()
    public createPost() {

    }

}
