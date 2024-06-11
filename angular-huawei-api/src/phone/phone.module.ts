import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from '../entities/phone.entity';

/**
 * 使用docker 拉取mysql镜像 开启mysql容器 创建数据库
 */
@Module({
  imports: [TypeOrmModule.forFeature([Phone])], // 导入其他模块
  controllers: [PhoneController],
  providers: [PhoneService],
})
export class PhoneModule {}
