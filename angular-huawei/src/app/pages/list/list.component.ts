import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api/api';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  phoneData: any = { data: [] };
  minPrice:any;
  maxPrice: any;
  pageData: any = { data: [] };
  pageCurrent: any = 1;
  pageCount:any = 0;
  pageIndex: any = 1;
  pageSize: any = 4;
  totalCount:any = 0;
  pageStart:any = 1;
  pageEnd: any = 4;
  pageItems:any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.getAllList();
  }
  getAllList() {
    this.apiService.getPhoneAllList().subscribe(res => {
      this.phoneData = res;
      this.totalCount = this.phoneData.length;
      this.pageCount = Math.ceil(this.totalCount / 4);

      for (let i = 0; i < this.pageCount; i++){
        this.pageItems.push(i+1);
      }
  });
  }
  clearPrice() {
    this.minPrice=null;
    this.maxPrice=null;
  }
  sortListByPage() {
    this.apiService.sortPhoneListByPage(this.minPrice,this.maxPrice,this.pageStart-1,this.pageEnd).subscribe(res => {
      this.phoneData = res;
      console.log(this.phoneData);
    });
  }
  sortReview() {
    this.apiService.sortPhoneReview(this.pageStart,this.pageEnd).subscribe(res => {
      this.phoneData = res;
    });
  }
  pagingPage() {
    this.apiService.pagingPhonePage(this.pageStart,this.pageEnd).subscribe(res => {
      this.phoneData = res;
  });
  }
  pageChang(i: any) {
    if (i == 1) {
      this.pageStart = 1;
      this.pageEnd = 4;
    }
    else{
      this.pageCurrent = i;
      this.pageStart = (this.pageCurrent - 1) * this.pageSize+1;
      this.pageEnd = Math.min(this.pageStart + this.pageSize-1, this.totalCount-1)+1;
    }
    this.pagingPage();
  }
  onInputChange(event: any) {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    // 过滤掉非数字字符
    const filteredValue = inputValue.replace(/[^0-9]/g, '');
    // 更新输入框的值
    inputElement.value = filteredValue;
  }
  ngOnInit(): void {
    this.pagingPage();
    console.log(this.pageCount);
  }
}
