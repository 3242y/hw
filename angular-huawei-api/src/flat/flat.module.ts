import { Module } from '@nestjs/common';
import { FlatService } from './flat.service';
import { FlatController } from './flat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flat } from '../entities/flat.entity';

/**
 * 使用docker 拉取mysql镜像 开启mysql容器 创建数据库
 */
@Module({
  imports: [TypeOrmModule.forFeature([Flat])], // 导入其他模块
  controllers: [FlatController],
  providers: [FlatService],
})
export class FlatModule {}
