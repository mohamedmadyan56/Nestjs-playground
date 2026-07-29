import {
  IsEmail,
  IsString,
  IsNotEmpty,
  Length,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(3, 20,)
  @Length(3, 20,)
  username: string;

  @IsEmail({}, { message: 'icorrect email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}