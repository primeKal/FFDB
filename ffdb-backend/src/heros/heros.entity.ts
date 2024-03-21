import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
} from 'sequelize-typescript';
import { HERO_OCCUPATION } from 'src/utils/constants';


const tableOptions = {
    tableName: 'heros',
}

@Table(tableOptions)
export class Hero extends Model<Hero> {
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
    })
    email: string;

    @Column({
        allowNull: true,
    })
    age: number;


    @Column({
        allowNull: false,
        defaultValue: false
    })
    isActive: boolean;

    @Column({
        allowNull: true,
        type: DataType.ENUM(...Object.values(HERO_OCCUPATION)),
    })
    public occupation: typeof HERO_OCCUPATION;

    @Column({
        allowNull: false,
    })
    description: string;


    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;

    // foreign keys

}