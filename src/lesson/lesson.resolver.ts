import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonGQLType } from "./lesson.gql-type";

// resolver is like the controller equivalent on Restful

@Resolver(of => LessonGQLType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

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
}