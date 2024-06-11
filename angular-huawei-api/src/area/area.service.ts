import { Injectable } from '@nestjs/common';
import {Area} from '../entities/area.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,EntityManager  } from 'typeorm';

@Injectable()
export class AreaService {
  
      constructor(
            @InjectRepository(Area)
            private readonly areaRepository: Repository<Area>,
      ) { }

      //查询所有数据
     async getAllList() {
            const areas =await this.areaRepository.createQueryBuilder("area").getMany();
            let obj = {
                  provinceList: [],
                  cityList: [],
                  areaList: []
            }
            areas.forEach((item: any) => {
                  if (item.level === 1) {
                        obj.provinceList.push(item)
                  }
                  else if (item.level === 2) {
                        obj.cityList.push(item)
                  }
                  else if (item.level === 3) {
                        obj.areaList.push(item);
                  }
            })
           return obj;
      }
}