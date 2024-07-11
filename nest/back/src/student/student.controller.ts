import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('student')
@ApiTags('student')
export class StudentController {
    constructor(private readonly studentservice: StudentService) { }

    @Get()
    async getStud():Promise<any>{
        return this.studentservice.getStud();
    }

    @Post()
    async student(): Promise<any> {
        return this.studentservice.createStudent();
    }

    @Patch()
    async updateStud(): Promise<any> {
        return this.studentservice.updateStudent();
    }

    @Delete()
    async deletes(): Promise<any> {
        return this.studentservice.deleteStudent();
    }

}


