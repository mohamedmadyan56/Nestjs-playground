import {
  IsEmail,
  IsString,
  IsNotEmpty,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}