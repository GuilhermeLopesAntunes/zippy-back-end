import { Injectable } from '@nestjs/common';
import { ChallengeEntity } from './entities/challenge.entity';
import { ChallengeType } from './entities/challenge.entity';
import { UserEntity } from "src/users/entities/user.entity";
import { CreateChallengesDto } from './dto/createChallenges.dto';
import { UpdateChallengesDto } from './dto/updateChallenges.dto';

@Injectable()
export class ChallengesService {

    private lastId = 1;
    private challenges: ChallengeEntity[] = [
        {
            id: 1,
            title: "Números Complexos",
            description: "Essa é a descrição do desafio",
            points: 10,
            type: ChallengeType.FILL_COLUMNS, 
            classrooms: [], 
            createdBy: new UserEntity(), 
        }
    ];

    findAll() {
        return this.challenges;
    }

    findOne(id: string) {
        return this.challenges.find(item => item.id === +id);
    }

    create(createChallengesDto:CreateChallengesDto){
        this.lastId++
        const id = this.lastId
        const newChallenge ={
            id,
            ...createChallengesDto, 
        }

        this.challenges.push(newChallenge)
    }

    update(id:string, updateChallengesDto:UpdateChallengesDto){
        const challengeId = this.challenges.findIndex(item=>item.id===+id)
        if(challengeId>=0){
            const challengeUpdate = this.challenges[challengeId]

            this.challenges[challengeId] ={
                ...challengeUpdate,
                ...updateChallengesDto
            }
        }
    }

    remove(id:string){
        const challengeId = this.challenges.findIndex(item => item.id === +id)

        if(challengeId>=0){
            this.challenges.splice(challengeId, 1)
        }
    }

    hello() {
        return "Essa rota retorna todas as Turmas";
    }
}
