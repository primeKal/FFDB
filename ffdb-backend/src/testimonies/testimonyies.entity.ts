import { ApiProperty } from '@nestjs/swagger';
import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    BelongsTo,
    ForeignKey,
} from 'sequelize-typescript';
import { Hero } from 'src/heros/heros.entity';


const tableOptions = {
    tableName: 'testimonies',
}

@Table(tableOptions)
export class Testimony extends Model<Testimony> {
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
    })
    description: string;

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;

    // foreign keys
    @ForeignKey(() => Hero)
    heroId: number

    @BelongsTo(() => Hero)
    hero: Hero

}