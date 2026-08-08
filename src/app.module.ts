import { Module } from "@nestjs/common";
import { UserModule } from "./users/users.module";
import { PostsModule } from './posts/providers/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { type } from "os";
import { User } from "./users/user.entity";
@Module({
    imports: [UserModule, PostsModule, AuthModule, TypeOrmModule.forRootAsync({
        imports: [],
        inject: [],
        useFactory: () => ({


            type: 'postgres',
            entities: [User],
            synchronize: true,
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'madyan1234',
            database: 'nestjs-blog'
        })

    })],
})
export class AppModule { }