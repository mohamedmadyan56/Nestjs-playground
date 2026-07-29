import {
  IsEmail,
  IsString,
  IsNotEmpty,
  Length,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(3, 20, { groups: ['create'] })
  @Length(3, 20, { groups: ['update'] })
  username: string;

  @IsEmail({}, { message: 'icorrect email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}