import { ApiProperty } from '@nestjs/swagger';
import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
} from 'sequelize-typescript';


const tableOptions = {
    tableName: 'users',
}

@Table(tableOptions)
export class User extends Model<User> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        allowNull: false,
    })
    name: string;

    @Column({
        allowNull: false,
        validate: {
            isEmail: true,
        },
        unique: true,
    })
    email: string;

    @Column({
        allowNull: true,
    })
    password: string;


    @Column({
        allowNull: false,
        defaultValue: false
    })
    isActive: boolean;

    @Column({
        allowNull: true,
    })
    contact_information: string;


    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;

    // foreign keys

}