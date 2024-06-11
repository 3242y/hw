import { Injectable } from '@nestjs/common';
import {Phone} from '../entities/phone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,EntityManager  } from 'typeorm';

@Injectable()
export class PhoneService {
  
  constructor(
    @InjectRepository(Phone)
    private readonly phoneRepository: Repository<Phone>,
    private entityManager: EntityManager,
  ) { }

  //查询所有数据
  getAllList() {
    return this.phoneRepository.createQueryBuilder("phone").getMany();
  }

  //根据id查询
  findById(id: number) {
    return this.phoneRepository.createQueryBuilder("phone")
      .where("phone.id = :id", { id })
      .getMany();
  }

  //分页
  async pagingPage(pageStart: number, pageEnd: number): Promise<any[]> {
    const tableName = 'phone'; // 确保这个是从安全的地方获取的，而不是直接来自用户输入
    const sql = `SELECT * FROM ${tableName} ORDER BY id LIMIT ?,?`;
    // 执行原生 SQL 查询
    const phones = await this.entityManager.query(sql, [pageStart-1, pageEnd]);
    return phones;
  }

  //根据评论数排序
  async sortReview(pageStart: number, pageEnd: number): Promise<any[]> {
    const tableName = 'phone'; // 确保这个是从安全的地方获取的，而不是直接来自用户输入
    const sql = `SELECT * FROM ${tableName} ORDER BY review desc LIMIT ?,?`;
    const phones = await this.entityManager.query(sql, [pageStart - 1, pageEnd]);
    return phones;
  }

  //根据价格排序
  async sortListByPage(minPrice: number, maxPrice: number, pageStart: number, pageEnd: number): Promise<any[]> {
    const tableName = 'phone'; // 确保这个是从安全的地方获取的，而不是直接来自用户输入
    const sql=`SELECT * FROM ${tableName} WHERE is_del = false AND now BETWEEN ? AND ? ORDER BY now LIMIT ?, ?;`
    const phones = await this.entityManager.query(sql, [minPrice, maxPrice, pageStart - 1, pageEnd]);
    return phones;
  }



}
