import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {TypeOrmModule} from "@nestjs/typeorm";

import { LessonModule } from './lesson/lesson.module';
import {Lesson} from "./lesson/lesson.entity";
import { StudentModule } from './student/student.module';
import {Student} from "./student/student.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
         type: 'mongodb' ,
          url: 'mongodb://172.17.0.3/school',
          synchronize: true,
          useUnifiedTopology: true,
          entities: [Lesson, Student]
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
        autoSchemaFile: true,
          driver: ApolloDriver
      }),
      LessonModule,
      StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
