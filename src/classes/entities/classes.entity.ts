import { UserEntity } from '../../users/entities/user.entity';
import { ChallengeEntity } from '../../challenges/entities/challenge.entity';

export class ClassroomEntity {
  id: number;
  name: string;
  code: string; 

  teachers: UserEntity[]; 
  students: UserEntity[]; 
  createdBy: string;

  challenges: ChallengeEntity[]; 
}
