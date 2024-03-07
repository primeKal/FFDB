import { USER_REPOSITORY } from "src/utils/constants";
import { User } from "./users.entity";


export const usersProvider = [
    {
        provide: USER_REPOSITORY,
        useValue: User,
    },
];