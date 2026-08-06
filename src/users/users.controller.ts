import { Controller, Get, Query, Param, ParseIntPipe, DefaultValuePipe, ValidationPipe, Body, Post, Patch } from "@nestjs/common"
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { GetUsersParamDto } from "./dtos/get-users-param.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UserSerive } from "./providers/users.service";
@Controller('users')
export class UserController {

  constructor(
    private readonly usersService: UserSerive
  ) { }





  @Get(':id')
  getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);

    return 'user found'
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(typeof createUserDto);
    return 'User created';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}

