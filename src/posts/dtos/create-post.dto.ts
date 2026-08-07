import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postyType.enum";




export class CreatePostDto {
    title: string;
    postType: postType;
    slug: string;
    status: postStatus;
    content?: string;
    schema?: string;
    featuredImageUrl?: string;
    publishedOn: Date;
    tags?: string[];
    metaOptions: [{ key: 'sidebarEnabled'; value: true }]


}




