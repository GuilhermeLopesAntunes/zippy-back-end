import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    name: string;
    @IsEmail()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    email: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    username: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    password: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    classroom: string; 
}