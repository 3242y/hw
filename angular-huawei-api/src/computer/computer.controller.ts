import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComputerService } from './computer.service';

@Controller('huawei/computer')
export class ComputerController {
      constructor(private readonly ComputerService: ComputerService) { }


      @Get('getAllList')
      async getAllList() {
            return this.ComputerService.getAllList();
      }

      @Get('findById/:id')
  findById(@Param('id') id: string) {
    return this.ComputerService.findById(+id);
  }

  @Get('pagingPage/:start/:end')
  pagingPage(@Param('start') start: number, @Param('end') end: number) {
      return this.ComputerService.pagingPage(+start, +end);
  }

  @Get('sortReview/:start/:end')
  sortReview(@Param('start') start: number, @Param('end') end: number) {
    return this.ComputerService.sortReview(+start, +end);
  }
  
  @Get('sortListByPage/:minPrice/:maxPrice/:start/:end')
  sortListByPage(@Param('minPrice') minPrice: number, @Param('maxPrice') maxPrice: number, @Param('start') start: number, @Param('end') end: number) {
    return this.ComputerService.sortListByPage(+minPrice, +maxPrice, +start, +end);
  }
}