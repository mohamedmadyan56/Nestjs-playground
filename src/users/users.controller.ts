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
  create(@Body() userData: any) {
    return userData;
  }

  @Patch(':username')
  update(
    @Param('username') username: string,
    @Body() input: any,
  ) {
    return input;
  }

  @Delete(':username')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('username',)username:string){
    console.log(username)
  }
}