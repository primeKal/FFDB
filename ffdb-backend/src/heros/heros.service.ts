import { Inject, Injectable } from '@nestjs/common';
import { HEROS_REPOSITORY } from 'src/utils/constants';
import { Hero } from './heros.entity';

@Injectable()
export class HerosService {
    constructor(@Inject(HEROS_REPOSITORY) private readonly herosRepository: typeof Hero) {
    }

    async getAllHeros(): Promise<Hero[]> {
        return await this.herosRepository.findAll()
    }

    async createHero(createHeroDto): Promise<any> {
        let createdHero = await this.herosRepository.create<Hero>(createHeroDto);
        return createdHero;
    }
}
