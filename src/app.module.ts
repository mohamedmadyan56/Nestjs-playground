import { Module } from "@nestjs/common";
import { UserModule } from "./users/users.module";
import { PostsModule } from './posts/providers/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { type } from "os";
import { User } from "./users/user.entity";
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { DatabaseModule } from './database/database.module';
@Module({
    imports: [UserModule, PostsModule, AuthModule,DatabaseModule ,TypeOrmModule.forRootAsync({
        imports: [],
        inject: [],
        useFactory: () => ({


            type: 'postgres',

            autoLoadEntities: true,
            synchronize: true,
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456',
            database: 'nestjs-blog'
        })

    }), TagsModule, MetaOptionsModule, DatabaseModule],
})
export class AppModule { }