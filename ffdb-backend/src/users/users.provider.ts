import { User } from "./users.entity";


export const usersProvider = [
    {
        provide: "user_repo",
        useValue: User,
    },
];