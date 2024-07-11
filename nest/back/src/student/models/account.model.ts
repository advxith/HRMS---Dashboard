import sequelize from "sequelize";
import { Model } from "sequelize-typescript";
import {Table, AutoIncrement, PrimaryKey, Column, AllowNull, ForeignKey, BelongsTo} from "sequelize-typescript"
import { Student } from "./student.model";

@Table

export class Account extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column(sequelize.BIGINT)
    id:bigint;

    
    @Column
    userName:String;
    
    @Column
    password:String;

    @ForeignKey(()=>Student)
    @Column(sequelize.BIGINT)
    sid:bigint;

    @BelongsTo(()=>Student,'sid')
    student:Student
}