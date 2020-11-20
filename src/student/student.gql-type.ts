import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentGQLType {
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}