import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Lesson')
export class LessonType {
  @Field(type => ID)  // required to explicitly define type
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}