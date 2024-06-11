import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/share/data.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  data: any;
  price: any;
  totlePrice = 0;
  serviceItems$=this.dataService.serviceItems$;
  isAllCheck = false;
  indeterminate = true;
  count = 0;
  constructor(private dataService: DataService,private router:Router) {
    this.serviceItems$.pipe(map(item => {
      return item
    })).subscribe(item => {
      this.data = item;
      console.log(this.data[0]);
    })
  }

  reduce(i:any) {
    this.data.map((item: any) => {
      if (item[1] > 1) {
        if (item[0].id === i) {
          if (this.data[0][5]) {
            item[1]--;
            this.totlePrice -= item[0].now;
        }
        }
      }
    })
  }
  add(i:any) {
    this.data.map((item: any) => {
      const items = this.data.find((item: any) => item[0].id === i);
      if (item[0].id === i) {
        if (this.data[0][5]) { 
          item[1]++;
          this.totlePrice += item[0].now;
        }   
        }
    })
  }
  Delshop(i: any) {
    this.data.map((item: any) => {
      if (item[0].id == i) {
        if (item[5] === true) {
          this.data.splice(this.data.indexOf(item), 1);
          this.totlePrice = this.totlePrice - item[0].now * item[1];
        }
      }
    })
  }
  goToOrder() {
    this.router.navigate(['/goods'])
  }
  allCheck() {
    this.totlePrice = 0;
    this.indeterminate = !this.indeterminate;
    if (this.isAllCheck) {
      this.data.map((i: any) => {
        i[5] = true;
        this.totlePrice += i[0].now * i[1];
      })
      this.count=this.data.length;
    }
    else {
      this.data.map((i: any) => {
        i[5] = false;
      })
      this.totlePrice = 0;
      this.count = 0;
    }
  }
  oneCheck(id: number) {
    const items = this.data.find((item: any) => item[0].id === id);
    this.count= this.data.filter((i: any) => i[5] === true).length;
      const price = items[0].now * items[1];
      if (items[5]) {
        this.totlePrice += price;    
      }
      else {
        this.totlePrice -= price;
      }
    if (this.data.every((item: any) => !item[5])) {
        this.isAllCheck=false;
        this.indeterminate = true;
        }
      else if (this.data.every((item: any) => item[5])) {
        this.isAllCheck = true;
        this.indeterminate = false;
      }
      else {
      this.indeterminate = true;
      }  
  }
  delCheck() {
    if (this.isAllCheck) {
      this.dataService.clearServiceItem();
      this.isAllCheck = false;
    }
  }
  ngOnInit(): void {
    this.data.map((item: any) => {
      item[5] = false;
    })
  }
}
