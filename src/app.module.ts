import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LessonModule } from './lesson/lesson.module';
import { StudentModule } from './student/student.module';

import { Lesson } from './lesson/lesson.entity';
import { Student } from './student/student.entity';

import * as config from 'config';

const dbConfig = config.get('config.db');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: dbConfig.type,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      synchronize: true,
      // note: currently cant connect to mongodb atlas using [typeorm@0.2.29], importing [reflect-metadata] does not work
      url: dbConfig.url,
      entities: [
        Lesson,
        Student
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule,
    StudentModule
  ]
})
export class AppModule { }