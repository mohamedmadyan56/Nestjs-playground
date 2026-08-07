import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsEmail,
    MinLength,
    MaxLength,
    Matches,
} from 'class-validator';


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstname: string;
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(96)
    lastname: string;
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(96)
    email: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: '...' })
    password: string;
}