import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/share/data.service';
import { ApiService } from '../../service/api/api';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit{
  @ViewChild('addBtn', { static: true }) addBtn: any;
  computerData: any={data:[]};
  phoneData: any={data:[]};
  flatData: any = { data: [] };
  shopData: any = [];
  public id: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    public activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private renderer: Renderer2,
    private apiService: ApiService
  ) {}
  selectedStyle = '雅黑'; // 初始时没有选中的元素
  selectedSize = '12GB+256GB'; // 初始时没有选中的元素
  selectedService = false;
  count = 1;
  styles = ['雅黑', '洛可可白', '大溪地灰', '芋紫', '梦蓝', '梦幻金'];
  sizes=['12GB+256GB','12GB+512GB','12GB+1TB','16GB+1TB']
  // 方法：设置选中的样式
  setStyle(style: any) {
    this.selectedStyle = style;
  }
  setSize(size: any) {
    this.selectedSize = size;
    
    if (this.selectedSize == '12GB+512GB') {
      this.computerData.now = 7899;
    }
    else if (this.selectedSize == '12GB+1TB') {
      this.computerData.now = 8899;
    }
    else if (this.selectedSize == '16GB+1TB') {
      this.computerData.now = 9899;
    }
  }
  setService(selectedService:any) {
    this.selectedService=!selectedService;
  }
  reduce() {
    if(this.count>1){
      this.count--;
    }
  }
  add() {
    this.count++;
  }
  addToCart() {
    this.renderer.setStyle(this.addBtn.nativeElement, 'display', 'block');
    document.body.style.overflow = 'hidden'; 
    this.shopData.push(this.computerData, this.count, this.selectedStyle, this.selectedSize,this.computerData.now);
    this.dataService.addService(this.shopData);
  }
  buyshop() {
    this.shopData.push(this.computerData, this.count, this.selectedStyle, this.selectedSize,this.computerData.now);
    this.dataService.addService(this.shopData);
  }
  cancleCart() {
    this.renderer.setStyle(this.addBtn.nativeElement, 'display', 'none');
    document.body.style.overflow = ''; // 允许body的滚动
  }

  findById() {
    this.apiService.findComputerById(this.id).subscribe(res => {
      this.computerData = res[0];
  });
    this.apiService.findPhoneById(this.id).subscribe(res => {
    this.phoneData = res[0];
  });
    this.apiService.findFlatById(this.id).subscribe(res => {
    this.flatData = res[0];
    });
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.findById();
    this.renderer.setStyle(this.addBtn.nativeElement, 'display', 'none');
  }
  }

