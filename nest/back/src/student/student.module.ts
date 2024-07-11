import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import {SequelizeModule} from '@nestjs/sequelize';
import { Account } from './models/account.model';           
import { Class } from './models/class.model';
import { Student } from './models/student.model';
import { StudentLesson } from './models/studentLesson.model';
import { Lesson } from './models/lesson.model';

@Module({
  imports:[SequelizeModule.forFeature([Account, Class, Student, StudentLesson, Lesson])],
  providers: [StudentService],
  controllers: [StudentController]
})

export class StudentModule {}
