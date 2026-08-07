import { Module } from "@nestjs/common";
import { UserModule } from "./users/users.module";
import { PostsModule } from './posts/providers/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [UserModule, PostsModule, AuthModule],
})
export class AppModule { }