import { Injectable } from '@nestjs/common';
import { Role, UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {

    private lastId = 1;
    private users: UserEntity[]=[
        {
            id: 1,
            username: "Guigui",
            name: "Guilherme Lopes Antunes",
            email: "guilhermelantunes123@gmail.com",
            password: "abcsdaasd123esxf.",
            role: Role.STUDENT,
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

    create(createUserDto: CreateUserDto){
        this.lastId++
        const id = this.lastId
        const newUser ={
            id,
            ...createUserDto,
            level: 0,
            role: Role.STUDENT,
            score: 0,
            coins: 0,
            items: [],
            trophies: []
        }
        this.users.push(newUser)
    }

    update(id: string, updateUserDto:UpdateUserDto){
        const userIndexUpdate = this.users.findIndex(item => item.id === +id)

        if(userIndexUpdate >=0){
            const userUpdate = this.users[userIndexUpdate]

            this.users[userIndexUpdate] ={
                ...userUpdate, // Mantém todas as propriedades do objeto original
                ...updateUserDto // Sobrescreve as propriedades que existem tanto em `recadoExistente` quanto em `body`
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
