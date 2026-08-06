import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {

    }








    @Get('{:userId}')
    getPosts(@Param('userId') userId: string) {
        return this.postService.findAll(userId);
    }

}
