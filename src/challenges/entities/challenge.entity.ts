import { UserEntity } from "src/users/entities/user.entity";
import {ClassroomEntity} from "src/classes/entities/classes.entity"
export enum ChallengeType {
  FILL_COLUMNS = 'FILL_COLUMNS',
  MARK_ITEMS = 'MARK_ITEMS',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE', 
  FILL_BLANKS = 'FILL_BLANKS', 
}

export class ChallengeEntity {
  id: number;
  title: string; 
  description: string; 
  points: number; 
  type: ChallengeType; 
  classrooms: ClassroomEntity[]; 
  createdBy: UserEntity; 
}
