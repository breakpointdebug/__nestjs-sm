import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonGQLType } from "./lesson.gql-type";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";
import { Lesson } from "./lesson.entity";
import { StudentService } from "../student/student.service";

// resolver is like the controller equivalent on Restful

@Resolver(of => LessonGQLType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService
    ) {}

  @Query(returns => LessonGQLType)
  async lesson(
    @Args('id') id: string
  ) {
   return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonGQLType])
  async lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(returns => LessonGQLType)
  async assignStudentsToLesson(
    @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  @Mutation(returns => LessonGQLType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
  /**
    mutation {
      createLesson(createLessonInput: {
        name: "test5",
        startDate: "2020-03-28T18:00:00Z",
        endDate: "2020-03-28T18:42:42Z"
      }) {
        id
        name
      }
    }
  */

  // be able to retrieve students[] after executing createLesson mutation
  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}