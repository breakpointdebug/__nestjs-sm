import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StudentGQLType } from "../student/student.gql-type";

@ObjectType('Lesson')
export class LessonGQLType {
  @Field(type => ID)  // required to explicitly define type
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(type => [StudentGQLType])
  students: string[];
}