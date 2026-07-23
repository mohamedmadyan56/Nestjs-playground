import { Controller, Get,Post } from "@nestjs/common";
@Controller("users")
export class UserController {
    @Get()
   findAllUser():string[]{
    return ["ahmed","mohamed","madyan"];
   }
   @Post()
 createUser():string{
    return 'Create new user';
   }
}