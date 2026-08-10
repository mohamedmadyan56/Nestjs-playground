import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { postType } from "./enums/postyType.enum";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 512,
        nullable: false,
    })
    title: string;

    @Column({
        type: 'enum',
        enum: PostType,
        nullable: false,
        default: PostType.POST,
    })
    postType: PostType;

    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true,
    })
    slug: string;

    @Column({
        type: 'enum',
        enum: PostStatus,
        nullable: false,
        default: PostStatus.DRAFT,
    })
    status: PostStatus;

    @Column({
        type: 'text',
        nullable: true,
    })
    content: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    schema: string;

    @Column({
        type: 'varchar',
        length: 1024,
        nullable: true,
    })
    featuredImage: string;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    publishedOn: Date;

    // tags
    // metaOptions
}