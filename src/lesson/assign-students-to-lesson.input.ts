import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field(type => ID)
  lessonId: string;

  @IsUUID("4", { each: true }) // validate each array items should have array of uuids
  @Field(type => [ID])
  studentIds: string[];
}