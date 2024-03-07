import { Inject, Injectable } from '@nestjs/common';
import { TESTIMONY_REPOSITORY } from 'src/utils/constants';
import { Testimony } from './testimonyies.entity';

@Injectable()
export class TestimoniesService {
    constructor(@Inject(TESTIMONY_REPOSITORY) private readonly testimoniesRepository: typeof Testimony) { }

    async getAllTestimonies(): Promise<Testimony[]> {
        return await this.testimoniesRepository.findAll()
    }

    async createTestimony(createUserDto): Promise<any> {
        let createdUser = await this.testimoniesRepository.create<Testimony>(createUserDto);
        return createdUser;
    }

}
