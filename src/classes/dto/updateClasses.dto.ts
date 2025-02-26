
import { PartialType } from '@nestjs/mapped-types';
import { CreateClassesDto } from './createClasses.dto';



export class UpdateClassesDto extends PartialType(CreateClassesDto) {
     
}