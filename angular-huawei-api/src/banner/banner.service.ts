import { Injectable } from '@nestjs/common';
import {Banner} from '../entities/banner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,EntityManager  } from 'typeorm';

@Injectable()
export class BannerService {
  
      constructor(
            @InjectRepository(Banner)
            private readonly bannerRepository: Repository<Banner>,
            private entityManager: EntityManager,
      ) { }

       //查询所有数据
       getAllList() {
            return this.bannerRepository.createQueryBuilder("banner").getMany();
      }
}