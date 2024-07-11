import sequelize from "sequelize";
import { Model } from "sequelize-typescript";
import {Table, AutoIncrement, PrimaryKey, Column, AllowNull, HasMany} from "sequelize-typescript"
import { Student } from "./student.model";
@Table

export class Class extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column(sequelize.BIGINT)
    id:bigint;

  
    @Column
    name:String;
    
    @Column
    faculty:String;

    @HasMany(()=>Student,'cid')
    student:Student[]
}