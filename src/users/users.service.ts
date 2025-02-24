import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {

    private lastId = 1;
    private users: UserEntity[]=[
        {
            id: 1,
            name: "Guilherme Lopes Antunes",
            email: "guilhermelantunes123@gmail.com",
            password: "abcsdaasd123esxf.",
            role: 'STUDENT',
            classroom: "apxdf",
            level: 2,
            score: 1000,
            coins: 20,
            items: ["avatar_2"],
            trophies: [{
                id:1,
                name: "future trophie",
                description: "Legal"
            }]

        }
    ]

    findAll(){
        return this.users
    }
    findOne(id:string){
        return this.users.find(item => item.id === +id)
    }

    create(body:any){
        this.lastId++
        const id = this.lastId
        const newUser ={
            id,
            ...body
        }
        this.users.push(newUser)
    }

    update(id: string, body:any){
        const userIndexUpdate = this.users.findIndex(item => item.id === +id)

        if(userIndexUpdate >=0){
            const userUpdate = this.users[userIndexUpdate]

            this.users[userIndexUpdate] ={
                ...userUpdate, // Mantém todas as propriedades do objeto original
                ...body // Sobrescreve as propriedades que existem tanto em `recadoExistente` quanto em `body`
            }
        }
    }

    remove(id:string){
        const userIndexRemove = this.users.findIndex(item => item.id === +id)
        if( userIndexRemove >= 0){
            this.users.splice(userIndexRemove, 1)
        }
    }   

    hello(){
        console.log("Hello")
    }
}
