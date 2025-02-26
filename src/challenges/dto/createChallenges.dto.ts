import { 
      IsString, 
      IsNotEmpty, 
      MinLength, 
      MaxLength, 
      IsInt, 
      Min, 
      IsEnum, 
      IsArray, 
      ValidateNested 
    } from "class-validator";
    import { Type } from "class-transformer";
    import { ChallengeType } from "../entities/challenge.entity";
    import { ClassroomEntity } from "src/classes/entities/classes.entity";
    import { UserEntity } from "src/users/entities/user.entity";
    
    export class CreateChallengesDto {
      @IsString()
      @IsNotEmpty()
      @MinLength(5)
      @MaxLength(100)
      title: string;
    
      @IsString()
      @IsNotEmpty()
      @MinLength(10)
      @MaxLength(500)
      description: string;
    
      @IsInt()
      @Min(1)
      points: number;
    
      @IsEnum(ChallengeType)
      type: ChallengeType;
    
      @IsArray()
      @ValidateNested({ each: true })
      @Type(() => ClassroomEntity)
      classrooms: ClassroomEntity[];
    
      @ValidateNested()
      @Type(() => UserEntity)
      createdBy: UserEntity;
    }
    