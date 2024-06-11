import { Injectable } from '@nestjs/common';
import {Flat} from '../entities/flat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,EntityManager  } from 'typeorm';

@Injectable()
export class FlatService {
  
      constructor(
            @InjectRepository(Flat)
            private readonly flatRepository: Repository<Flat>,
            private entityManager: EntityManager,
      ) { }


      //查询所有数据
      getAllList() {
            return this.flatRepository.createQueryBuilder("flat").getMany();
      }

      //根据id查询
      findById(id: number) {
      return this.flatRepository.createQueryBuilder("flat")
        .where("flat.id = :id", { id })
        .getMany();
      }
  
    //分页
    async pagingPage(pageStart: number, pageEnd: number): Promise<any[]> {
      const tableName = 'flat'; // 确保这个是从安全的地方获取的，而不是直接来自用户输入
      const sql = `SELECT * FROM ${tableName} ORDER BY id LIMIT ?,?`;
      // 执行原生 SQL 查询
      const flats = await this.entityManager.query(sql, [pageStart-1, pageEnd]);
      return flats;
    }
  
    //根据评论数排序
    async sortReview(pageStart: number, pageEnd: number): Promise<any[]> {
      const tableName = 'flat'; // 确保这个是从安全的地方获取的，而不是直接来自用户输入
      const sql = `SELECT * FROM ${tableName} ORDER BY review desc LIMIT ?,?`;
      const flats = await this.entityManager.query(sql, [pageStart - 1, pageEnd]);
      return flats;
    }
  
    //根据价格排序
    async sortListByPage(minPrice: number, maxPrice: number, pageStart: number, pageEnd: number): Promise<any[]> {
      const tableName = 'flat'; // 确保这个是从安全的地方获取的，而不是直接来自用户输入
      const sql=`SELECT * FROM ${tableName} WHERE is_del = false AND now BETWEEN ? AND ? ORDER BY now LIMIT ?, ?;`
      const flats = await this.entityManager.query(sql, [minPrice, maxPrice, pageStart - 1, pageEnd]);
      return flats;
    }
  
      
}