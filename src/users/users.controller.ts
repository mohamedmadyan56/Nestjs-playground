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
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-User.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserEntity } from "src/user.entity";
import { v4 as uuid } from "uuid";
import { ParseUUIDPipe } from "@nestjs/common";
@Controller("users")
export class UserController {
  private readonly users: UserEntity[] = [];

  @Get()
  find(): UserEntity[] {
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
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
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
    @Body() UpdateUserDto: UpdateUserDto,
  ) {
    return UpdateUserDto;
  }

  @Delete(":username")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("username") username: string) {
    console.log(username);
  }
}
