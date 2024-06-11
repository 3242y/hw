import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('huawei/phone')
export class PhoneController {
  constructor(private readonly PhoneService: PhoneService) {}


  @Get('getAllList')
  async getAllList() {
    return this.PhoneService.getAllList();
  }

  @Get('findById/:id')
  findById(@Param('id') id: string) {
    return this.PhoneService.findById(+id);
  }

  @Get('pagingPage/:start/:end')
  pagingPage(@Param('start') start: number, @Param('end') end: number) {
      return this.PhoneService.pagingPage(+start, +end);
  }

  @Get('sortReview/:start/:end')
  sortReview(@Param('start') start: number, @Param('end') end: number) {
    return this.PhoneService.sortReview(+start, +end);
  }
  
  @Get('sortListByPage/:minPrice/:maxPrice/:start/:end')
  sortListByPage(@Param('minPrice') minPrice: number, @Param('maxPrice') maxPrice: number, @Param('start') start: number, @Param('end') end: number) {
    return this.PhoneService.sortListByPage(+minPrice, +maxPrice, +start, +end);
  }

}
