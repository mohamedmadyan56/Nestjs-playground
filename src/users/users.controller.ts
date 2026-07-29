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
  NotFoundException,
  ValidationPipe,
  UsePipes,
  Query,
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-User.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserEntity } from "src/user.entity";
import { v4 as uuid } from "uuid";
import { ParseUUIDPipe } from "@nestjs/common";
import { CustomValidationPipe } from "./pipes/validation-pipe";
@Controller("users")
@UsePipes(ValidationPipe)
export class UserController {
  private readonly users: UserEntity[] = [];

  @Get()
  find(@Query('username', CustomValidationPipe) username: string): UserEntity[] {
    return this.users;
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string): UserEntity {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }
  @Post()
  create(@Body(new ValidationPipe({ groups: ['create'] })) ) {
    const newUser: UserEntity = {
      ...CreateUserDto,
      id: uuid(),
    };
    this.users.push(newUser);
    return newUser;
  }
  @UsePipes(ValidationPipe)
  @Patch(":username")
  update(
    @Param("username") username: string,
    @Body(new ValidationPipe({ groups: ['update'] })) UpdateUserDto: UpdateUserDto,
  ) {
    return UpdateUserDto;
  }

  @Delete(":username")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("username") username: string) {
    console.log(username);
  }
}
