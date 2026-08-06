import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    public findAll(userId: string) {
        return [{
            "title": "Test title 1",
            "content": "Test content 1"
        },
        {
            "title": "Test title 2",
            "content": "Test content 2"
        }]
    }
}
