import sequelize from "sequelize";
import { Model } from "sequelize-typescript";
import { Table, AutoIncrement, PrimaryKey, Column, AllowNull, HasOne, ForeignKey, BelongsToMany, BelongsTo} from "sequelize-typescript"
import { Account } from "./account.model";
import { Class } from "./class.model";
import { StudentLesson } from "./studentLesson.model";
import { Lesson } from "./lesson.model";
@Table

export class Student extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(sequelize.BIGINT)
    id: bigint;

    @AllowNull(false)
    @Column
    name: String;

    @Column
    email: String;

    @HasOne(() => Account, 'sid')
    account: Account


    @ForeignKey(() => Class)
    @Column(sequelize.BIGINT)
    cid: bigint;

    @BelongsTo(() => Class, 'cid')
    class: Class

    @BelongsToMany(() => Lesson, {
        through: { model: () => StudentLesson },
        foreignKey: 'sid'
    })
    lesson:Lesson[];
}