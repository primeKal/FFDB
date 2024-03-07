import { STORY_REPOSITORY, USER_REPOSITORY } from "src/utils/constants";
import { Story } from "./stories.entity";


export const storiesProvider = [
    {
        provide: STORY_REPOSITORY,
        useValue: Story,
    },
];