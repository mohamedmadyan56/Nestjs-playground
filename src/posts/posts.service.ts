import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from './post.entity';
import { MetaOption } from '../meta-options/meta-option.entity';

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
    // 1. Create Meta Options
    let metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(
          createPostDto.metaOptions,
        )
      : null;

    // 2. Save Meta Options
    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
    }

    // 3. Create Post
    const post = this.postRepository.create(createPostDto);

    // 4. Attach Meta Options to Post
    if (metaOptions) {
      post.metaOptions = metaOptions;
    }

    // 5. Save Post
    return await this.postRepository.save(post);
  }
}