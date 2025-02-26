import { IsArray, IsNotEmpty, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { Type } from "class-transformer";
import { UserEntity } from '../../users/entities/user.entity';

export class CreateClassesDto {
   
      @IsString()
      @IsNotEmpty()
      @MinLength(5)
      @MaxLength(50)
      name: string;

      @IsArray()
      @ValidateNested({ each: true })
      @Type(() => UserEntity)
      teachers: UserEntity[];
      @IsArray()
      @ValidateNested({ each: true })
      @Type(() => UserEntity)
      students: UserEntity[];
    
}