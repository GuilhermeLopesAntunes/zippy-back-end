import { ClassesService } from './classes.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

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
    create(@Body() body:any ){
        return this.ClassesService.create(body)
        
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body:any){
        return this.ClassesService.update(id,body)

    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.ClassesService.remove(id)
    }



}
