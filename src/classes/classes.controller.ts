import { ClassesService } from './classes.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateClassesDto } from './dto/createClasses.dto';
import { UpdateClassesDto } from './dto/updateClasses.dto';

@Controller('classes')
export class ClassesController {

    constructor(private readonly ClassesService: ClassesService){}

    @Get()
    findAll(){
        return this.ClassesService.findAll() 
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.ClassesService.findOne(id)
    }

    @Post()
    create(@Body() createClassesDto: CreateClassesDto ){
        return this.ClassesService.create(createClassesDto)
        
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateClassesDto:UpdateClassesDto){
        return this.ClassesService.update(id,updateClassesDto)

    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.ClassesService.remove(id)
    }



}
