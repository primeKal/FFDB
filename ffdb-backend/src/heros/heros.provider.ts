import { HEROS_REPOSITORY } from "src/utils/constants";
import { Hero } from "./heros.entity";


export const herosProvider = [
    {
        provide: HEROS_REPOSITORY,
        useValue: Hero,
    },
];