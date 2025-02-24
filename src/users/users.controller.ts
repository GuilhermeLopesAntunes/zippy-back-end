import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(private readonly UsersService: UsersService){}

    @Get()
    findAll(){
        return this.UsersService.findAll()
    }
    
    @Get(':id')
    findoOne(@Param('id') id:string){
        return this.UsersService.findOne(id)
    }   

    @Post()
    create(@Body() body:any){
        return this.UsersService.create(body)
    }


    @Patch(":id")
    update(@Param('id') id:string, @Body() body:any){
        return  this.UsersService.update(id,body)
    }

    @Delete(":id")
    remove(@Param("id") id:string){
        return this.UsersService.remove(id)
    }
    

}
