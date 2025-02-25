import { Injectable } from '@nestjs/common';
import { ClassroomEntity } from './entities/classes.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateClassesDto } from './dto/createClasses.dto';
import { UpdateClassesDto } from './dto/updateClasses.dto';

@Injectable()
export class ClassesService {

    private lastId = 1
    private classes: ClassroomEntity[] =[
        {
            id:1,
            name:"Sala 1",
            code: "abcxs12",
            createdBy: "Guilherme",
            teachers: [],
            students: [],
            challenges:[]
        }
    ]


    findAll(){
        return this.classes
    }

    findOne(id:string){
        return this.classes.find(item=> item.id === +id)
    }

    create(createClassesDto:CreateClassesDto){
        this.lastId++
        const id = this.lastId++
        const newClassroom ={
            id,
            ...createClassesDto,
            code: "abxs1",
            challenges: []
        }

        this.classes.push(newClassroom)
    }

    update(id:string, updateClassesDto:UpdateClassesDto){
        const classesIndex = this.classes.findIndex(item => item.id === +id)
        if(classesIndex >= 0){
            const classUpdate = this.classes[classesIndex]
            this.classes[classesIndex] = {
                ...classUpdate,
                ...updateClassesDto
            }
        }
    }

    remove(id:string){
        const classeId = this.classes.findIndex(item => item.id === +id)
        if(classeId>=0){
            this.classes.splice(classeId,1)
        }


    }

    hello(){
        console.log("Hello")
    }
}
