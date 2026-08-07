import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postyType.enum";
import { CreatePostMetaOptionsDto } from "./ceate-post-meta-options-dto";
import { Type } from "class-transformer"



export class CreatePostDto {
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title: string;
    @IsEnum(postType)
    @IsNotEmpty()
    postType: postType;
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9-]+$/, {
        message:
            'A slug should be all small letters and uses only hyphen and without spaces.',
    })
    slug: string;
    @IsEnum(postStatus)
    @IsNotEmpty()

    status: postStatus;
    @IsString()
    @IsOptional()
    content?: string;
    @IsString()
    @IsOptional()
    @IsJSON()
    schema?: string;
    @IsOptional()
    @IsUrl()
    featuredImageUrl?: string;
    @IsOptional()
    @IsISO8601()
    publishedOn: Date;
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    tags?: string[];
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionsDto)
    metaOptions: CreatePostMetaOptionsDto[];


}




