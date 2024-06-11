import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banner } from '../entities/banner.entity';

/**
 * 使用docker 拉取mysql镜像 开启mysql容器 创建数据库
 */
@Module({
  imports: [TypeOrmModule.forFeature([Banner])], // 导入其他模块
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {}