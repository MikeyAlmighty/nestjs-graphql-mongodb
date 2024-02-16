import { Repository } from "typeorm";
import { Student } from "./student.entity";
import { CreateStudentInput } from "./create-student-input";
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
    getStudents(): Promise<Student[]>;
    getStudentById(id: string): Promise<Student>;
    getManyStudents(studentIds: string[]): Promise<Student[]>;
}
