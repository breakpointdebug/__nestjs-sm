import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateStudentInput } from "./create-student.input";
import { StudentGQLType } from "./student.gql-type";
import { StudentService } from "./student.service";

@Resolver(of => StudentGQLType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(returns => [StudentGQLType])
  async students() {
    return this.studentService.allStudents();
  }

  @Query(returns => StudentGQLType)
  async student(
    @Args('id') id: string
  ) {
    return this.studentService.getStudentById(id);
  }

  @Mutation(returns => StudentGQLType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}