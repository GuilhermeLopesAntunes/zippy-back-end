import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
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
    create(@Body() createUserDto: CreateUserDto){
        return this.UsersService.create(createUserDto)
    }


    @Patch(":id")
    update(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto){
        return  this.UsersService.update(id,updateUserDto)
    }

    @Delete(":id")
    remove(@Param("id") id:string){
        return this.UsersService.remove(id)
    }
    

}
