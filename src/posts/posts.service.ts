import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Post } from './post.entity';
import { MetaOption } from '../meta-options/meta-options.entity';

import { CreatePostDto } from './dtos/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(createPostDto: CreatePostDto) {
   
    

    
    const post = this.postRepository.create(createPostDto);

   
   

    return await this.postRepository.save(post);
  }





  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    let posts = await this.postRepository.find()

  }





}