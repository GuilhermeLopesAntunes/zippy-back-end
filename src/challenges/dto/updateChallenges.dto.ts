
import { PartialType } from "@nestjs/mapped-types";
import { CreateChallengesDto } from "./createChallenges.dto";

export class UpdateChallengesDto extends PartialType(CreateChallengesDto){

}