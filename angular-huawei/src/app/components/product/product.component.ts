import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
  
export class ProductComponent implements OnInit{
  @Output() hideParentPage = new EventEmitter<void>();
  computerData: any=[];
  phoneData: any=[];
  flatData: any=[];
  bannerData: any=[];
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.getAllList();
  }

  getAllList() {
    this.apiService.getComputerAllList().subscribe(res => {
      this.computerData = res;
  });
    this.apiService.getPhoneAllList().subscribe(res => {
      this.phoneData = res;
  });
    this.apiService.getFlatAllList().subscribe(res => {
    this.flatData = res;
    });
    this.apiService.getBannerAllList().subscribe(res => {
      this.bannerData = res;
  });
  }
  hideParent(id:string){
    this.router.navigate(["/shopping",id]) 
  }

  ngOnInit(): void {
    
  }


}
