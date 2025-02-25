import { UserEntity } from '../../users/entities/user.entity';

export class CreateClassesDto {
   
    
      //id: number;
      name: string;
      //code: string; 
    
      teachers: UserEntity[]; 
      createdBy: string
      students: UserEntity[]; 
    
      //challenges: ChallengeEntity[]; 
    
}