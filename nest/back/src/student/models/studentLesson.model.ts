import sequelize from "sequelize";
import { Model } from "sequelize-typescript";
import {Table, AutoIncrement, PrimaryKey, Column, AllowNull, ForeignKey, BelongsTo} from "sequelize-typescript"
import { Student } from "./student.model";
import { Lesson } from "./lesson.model";
@Table

export class StudentLesson extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column(sequelize.BIGINT)
    id:bigint;

    @ForeignKey(()=>Student)
    @Column(sequelize.BIGINT)
    sid:bigint;

    @BelongsTo(()=>Student,'sid')
    student:Student;

    @ForeignKey(()=>Lesson)
    @Column(sequelize.BIGINT)
    lid:bigint;

    @BelongsTo(()=>Lesson,'lid')
    lesson:Lesson;
}