import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-User.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UserController {
  @Get()
  find(): string[] {
    return ['ahmed', 'mohamed', 'madyan'];
  }

  @Get(':username')
  findOne(@Param('username') username: string): string {
    return username;
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return CreateUserDto;
  }

  @Patch(':username')
  update(
    @Param('username') username: string,
    @Body() UpdateUserDto: UpdateUserDto,
  ) {
    
    return UpdateUserDto;
  }

  @Delete(':username')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('username',)username:string){
    console.log(username);
  }
}

