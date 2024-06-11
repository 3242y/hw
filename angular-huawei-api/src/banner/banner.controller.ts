import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BannerService } from './banner.service';

@Controller('huawei/banner')
export class BannerController {
      constructor(private readonly BannerService: BannerService) { }

      
      @Get('getAllList')
      async getAllList() {
            return this.BannerService.getAllList();
      }

}