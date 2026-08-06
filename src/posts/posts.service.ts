import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
@Injectable()
export class PostsService {
    constructor(private readonly usersService: UsersService) {

    }
    public findAll(userId: string) {
        const user = this.usersService.findOneById(userId);

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
