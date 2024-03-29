import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Student} from "../student/student.entity";
import {StudentType} from "../student/student.type";

@ObjectType('Lesson')
export class LessonType {
    @Field(type => ID)
    id: string

    @Field()
    name: string

    @Field()
    startDate: string

    @Field()
    endDate: string

    @Field(type => [StudentType])
    students: string[]
}