import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computer } from '../entities/computer.entity';

/**
 * 使用docker 拉取mysql镜像 开启mysql容器 创建数据库
 */
@Module({
  imports: [TypeOrmModule.forFeature([Computer])], // 导入其他模块
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputerModule {}
