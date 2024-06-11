import { Component, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../../service/share/data.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.css'
})
export class GoodsComponent implements OnInit{
  @ViewChild('addressNameControl') addressNameControl: any;
  @ViewChild('addressPhoneControl') addressPhoneControl: any;
  name: any;
  count: any;
  price: any;
  data: any;
  addBtn1: any=false;
  addBtn2: any = true;
  addBtn3: any = false;
  addBox: any = false;
  totlePrice = 0;
  serviceItems$=this.dataService.serviceItems$;
  freight = 9.00;
  discount = 50.00;
  addressName:any;
  addressPhone:any;
  addressPhone1:any;
  addressText: any;
  addressData: any;
  addressForm: boolean = false;
  subTime = 3;

  constructor(private dataService: DataService,private router:Router,private message: NzMessageService) {
    this.serviceItems$.pipe(map(item => {
      return item
    })).subscribe(item => {
      this.data = item;
      
    })
  }
  addAddress() {
    this.addBtn2 = false;
    this.addBox = true;
    document.body.style.overflow = 'hidden'; 
  }
  changeAddress() {
    this.addBtn3 = false;
    this.addBtn1 = true;
    this.addBtn2 = false;
    this.addBox = true;
    document.body.style.overflow = 'hidden'; 
  }
  closeAdd() {
    this.addBtn1 = false;
    this.addBtn2 = true;
    this.addBox = false;
    document.body.style.overflow = ''; 
  }
  safeInfo() {
    if (this.addressNameControl.valid&&this.addressPhoneControl.valid) {
      this.addBox = false;
      document.body.style.overflow = ''; 
      this.addBtn1 = true;
      this.addBtn2 = false;
      this.addBtn3 = true;
    }
    else {
      alert('请填写完整信息')
    }
   
  }
  handleDataChange(data?: any) {
    this.addressData = data;
  
  }
  submitOrder() {
    
   let intervalId= setInterval(() => {
      this.subTime--;
     if (this.subTime <= 0) {
       clearInterval(intervalId);
       this.dataService.clearServiceItem();
       this.router.navigate(['/cart'])
     }
   }, 1000)
   this.message.success(`交易成功，3秒后将回到购物车`, {
    nzDuration: 3000
  });
  }


  ngOnInit(): void {
    this.data.map((item:any) => {
      this.totlePrice=item[0].now*item[1]+this.freight-this.discount
    })
  }
  
  
}
