import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from '../entities/area.entity';

/**
 * 使用docker 拉取mysql镜像 开启mysql容器 创建数据库
 */
@Module({
  imports: [TypeOrmModule.forFeature([Area])], // 导入其他模块
  controllers: [AreaController],
  providers: [AreaService],
})
export class AreaModule {}
