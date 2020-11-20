import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

// resolver is like the controller equivalent on Restful

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(returns => LessonType)
  lesson(
    @Args('id') id: string
  ) {
   return this.lessonService.getLesson(id);
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

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

}