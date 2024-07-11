import { Injectable } from '@nestjs/common';
import { Student } from './models/student.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student)
        private studentModel: typeof Student
    ) { }

    async getStud(): Promise<any> {
        const studentResp = await this.studentModel.findAll({ attributes: ['name'], where: { id: '3' } })
        // const studentResp = await this.studentModel.findOne({where:{id:"1"}})
        console.log(studentResp)
        return studentResp
    }

    createStudent(): any {
        const studentData = [{
            name: 'Advaith',
            city: 'Kochi'
        },
        {
            name: 'Aswanth',
            city: 'Kannur'
        },
        {
            name: 'Abhishek',
            city: 'Trivandrum'
        }
    ]

        const studentResponse = this.studentModel.bulkCreate(studentData)
        return studentResponse
    }


    async updateStudent(): Promise<any> {
        const studentUpdateData = {
            name: 'Aswanth',
            city: 'Kannur'
        }

        const studentResponse1 = await this.studentModel.update(studentUpdateData, { where: { id: '2' } })
        return studentResponse1
    }

    async deleteStudent(): Promise<any> {

        const studentResponse2 = await this.studentModel.destroy({ where: { id: '2' } })
        return studentResponse2
    }
}
