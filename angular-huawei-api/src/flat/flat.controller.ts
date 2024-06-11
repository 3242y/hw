import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlatService } from './flat.service';

@Controller('huawei/flat')
export class FlatController {
      constructor(private readonly FlatService: FlatService) { }


      @Get('getAllList')
      async getAllList() {
            return this.FlatService.getAllList();
      }

      @Get('findById/:id')
  findById(@Param('id') id: string) {
    return this.FlatService.findById(+id);
  }

  @Get('pagingPage/:start/:end')
  pagingPage(@Param('start') start: number, @Param('end') end: number) {
      return this.FlatService.pagingPage(+start, +end);
  }

  @Get('sortReview/:start/:end')
  sortReview(@Param('start') start: number, @Param('end') end: number) {
    return this.FlatService.sortReview(+start, +end);
  }
  
  @Get('sortListByPage/:minPrice/:maxPrice/:start/:end')
  sortListByPage(@Param('minPrice') minPrice: number, @Param('maxPrice') maxPrice: number, @Param('start') start: number, @Param('end') end: number) {
    return this.FlatService.sortListByPage(+minPrice, +maxPrice, +start, +end);
  }
}