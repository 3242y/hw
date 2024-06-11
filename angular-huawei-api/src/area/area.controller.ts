import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AreaService } from './area.service';

@Controller('huawei/area')
export class AreaController {
      constructor(private readonly AreaService: AreaService) { }

      
      @Get('getAllList')
      async getAllList() {
            return this.AreaService.getAllList();
      }

}