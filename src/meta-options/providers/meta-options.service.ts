import { Injectable } from '@nestjs/common';
import { MetaOption } from '../meta-options.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/ceate-post-meta-options-dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
    constructor(
        @InjectRepository(MetaOption)
        private readonly metaOptionsRepository: Repository<MetaOption>,
    ) { }

    async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
        const metaOption = this.metaOptionsRepository.create(
            createPostMetaOptionsDto,
        );

        return await this.metaOptionsRepository.save(metaOption);
    }
}