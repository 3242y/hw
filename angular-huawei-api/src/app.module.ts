import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneModule } from './phone/phone.module';
import { ComputerModule } from './computer/computer.module';
import { FlatModule } from './flat/flat.module';
import { AreaModule } from './area/area.module';
import { BannerModule } from './banner/banner.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '123456',
      database: 'huawei',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],//匹配数据表实体文件
      synchronize: true,//生产环境关闭
    }),
    PhoneModule,
    ComputerModule,
    FlatModule,
    AreaModule,
    BannerModule
  ], // 导入其他模块
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
