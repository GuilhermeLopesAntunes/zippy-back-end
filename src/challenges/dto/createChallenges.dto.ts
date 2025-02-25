import { UserEntity } from "src/users/entities/user.entity";
import {ClassroomEntity} from "src/classes/entities/classes.entity"
import { ChallengeType } from "../entities/challenge.entity";


    

export class CreateChallengesDto{
      //id: number;
      title: string; 
      description: string; 
      points: number; 
      type: ChallengeType;
      classrooms: ClassroomEntity[]; 
      createdBy: UserEntity; 
}