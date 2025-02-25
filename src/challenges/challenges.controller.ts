import { ChallengesService } from './challenges.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateChallengesDto } from './dto/createChallenges.dto';

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
    create(@Body() createChallengesDto: CreateChallengesDto ){
        return this.ChallengesService.create(createChallengesDto)
            
    }
    
    @Patch(':id')
     update(@Param('id') id:string, @Body() createChallengesDto:CreateChallengesDto){
        return this.ChallengesService.update(id, createChallengesDto)
    
    }
    
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.ChallengesService.remove(id)
    }

}
