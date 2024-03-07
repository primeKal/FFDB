import { TESTIMONY_REPOSITORY, USER_REPOSITORY } from "src/utils/constants";
import { Testimony } from "./testimonyies.entity";



export const testimonyProvider = [
    {
        provide: TESTIMONY_REPOSITORY,
        useValue: Testimony,
    },
];