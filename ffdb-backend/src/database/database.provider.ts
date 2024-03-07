import { Sequelize } from 'sequelize-typescript';
import { Story } from 'src/stories/stories.entity';
import { Testimony } from 'src/testimonies/testimonyies.entity';
import { User } from 'src/users/users.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.DATABASE_HOST,
                port: parseInt(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: 'ffdb',
                ssl: true,
                dialectOptions: {
                    ssl: true
                }
            });
            sequelize.addModels([User, Story, Testimony]);
            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];