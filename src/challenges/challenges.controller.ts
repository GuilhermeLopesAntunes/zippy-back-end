import { ChallengesService } from './challenges.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('challenges')
export class ChallengesController {

    constructor (private readonly ChallengesService: ChallengesService){}

    @Get()
    findAll(){
        return this.ChallengesService.findAll()
    }
    
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.ChallengesService.findOne(id)
    }
    
    @Post()
    create(@Body() body:any ){
        return this.ChallengesService.create(body)
            
    }
    
    @Patch(':id')
     update(@Param('id') id:string, @Body() body:any){
        return this.ChallengesService.update(id, body)
    
    }
    
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.ChallengesService.remove(id)
    }

}
