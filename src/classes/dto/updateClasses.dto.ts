import { UserEntity } from '../../users/entities/user.entity';
import { ChallengeEntity } from '../../challenges/entities/challenge.entity';



export class UpdateClassesDto {
     //id: number;
     name ?: string;
     //code: string; 
        
     teachers ?: UserEntity[]; 
     // createdBy: string
     students ?: UserEntity[]; 
     challenges ?: ChallengeEntity[]; 
}