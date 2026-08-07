import { Controller, Get, Query, Param, ParseIntPipe, DefaultValuePipe, ValidationPipe, Body, Post, Patch } from "@nestjs/common"
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { GetUsersParamDto } from "./dtos/get-users-param.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UsersService } from "./providers/users.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {

  constructor(
    private readonly usersService: UsersService
  ) { }





  @Get(':id')
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application',

  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'the number of entires returned per query ',
    example: 10
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'the postion of the page number that you want the api to reutn ',
    example: 1
  })
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

