import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Headers
  HttpCode,
  HttpStatus,
  NotFoundException,
  ValidationPipe,
  UsePipes,
  Query,
  Ip
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-User.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserEntity } from "src/user.entity";
import { v4 as uuid } from "uuid";
import { ParseUUIDPipe } from "@nestjs/common";
import { CustomValidationPipe } from "./pipes/validation-pipe";
import { UserService } from "./users.service"
@Controller("users")
@UsePipes(ValidationPipe)
export class UserController {
  constructor(private readonly userService: UserService) {

  }

  @Get()
  find(): UserEntity[] {
    return this.userService.findUser();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string): UserEntity {
    return this.userService.findUserById(id);


  }
  @Post()
  create(@Body() CreateUserDto: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(headers);
    return this.userService.createUser(CreateUserDto);
  }


  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() UpdateUserDto: UpdateUserDto,) {
    return this.userService.updateUser(id, UpdateUserDto)
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: string) {
    this.userService.deleteUser(id);
  }
}
