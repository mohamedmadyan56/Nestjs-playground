import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MetaOption {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'json',
        nullable: false,
    })
    metaValue: object;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}