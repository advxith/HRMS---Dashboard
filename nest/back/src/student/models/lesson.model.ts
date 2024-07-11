import sequelize from "sequelize";
import { Model } from "sequelize-typescript";
import {Table, AutoIncrement, PrimaryKey, Column, AllowNull, BelongsToMany, BelongsTo} from "sequelize-typescript"
import { Student } from "./student.model";
import { StudentLesson } from "./studentLesson.model";
@Table
export class Lesson extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column(sequelize.BIGINT)
    id:bigint;

    @Column
    name:String;
    
    @Column
    duration:String;

    @BelongsTo(() => Student, 'sid')
    students: Student

    @BelongsToMany(() => Student, {
        through: { model: () => StudentLesson },
        foreignKey: 'lid'
    })
    student:Student[];
}
