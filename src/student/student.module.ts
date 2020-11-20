import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  providers: [
    StudentService,
    StudentResolver
  ],
  exports: [
    StudentService // allow export provider within module, injectible in any other module
  ]
})
export class StudentModule {}