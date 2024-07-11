import sequelize from "sequelize";
import { Model } from "sequelize-typescript";
import {Table, AutoIncrement, PrimaryKey, Column, AllowNull} from "sequelize-typescript"
@Table
export class mod extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column(sequelize.BIGINT)
    id:bigint;

    @AllowNull(false)
    @Column
    name:String;
    
    @Column
    city:String;
}