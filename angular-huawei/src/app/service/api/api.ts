import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //电脑api
  getComputerAllList(): Observable<any> {
    return this.http.get(`http://localhost:3000/huawei/computer/getAllList`);
      }

  findComputerById(id:string): Observable<any> {
      return this.http.get(`http://localhost:3000/huawei/computer/findById/${id}`);
  }

  //手机api
  getPhoneAllList(): Observable<any> {
    return this.http.get(`http://localhost:3000/huawei/phone/getAllList`);
      }

  sortPhoneListByPage(minPrice:number, maxPrice:number, pageStart:number, pageEnd:number): Observable<any> {
      return this.http.get(`http://localhost:3000/huawei/phone/sortListByPage/${minPrice}/${maxPrice}/${pageStart}/${pageEnd}`);
      }

  sortPhoneReview(pageStart:number, pageEnd:number): Observable<any>  {
      return this.http.get(`http://localhost:3000/huawei/phone/sortReview/${pageStart}/${pageEnd}`);
      }

  pagingPhonePage(pageStart:number, pageEnd:number): Observable<any>  {
      return this.http.get(`http://localhost:3000/huawei/phone/pagingPage/${pageStart}/${pageEnd}`)
  }
  
  findPhoneById(id:string): Observable<any>  {
      return this.http.get(`http://localhost:3000/huawei/phone/findById/${id}`);
      }

 
  //平板api
  getFlatAllList(): Observable<any> {
    return this.http.get(`http://localhost:3000/huawei/flat/getAllList`);
      }

  findFlatById(id:string): Observable<any>  {
      return this.http.get(`http://localhost:3000/huawei/flat/findById/${id}`);
      }

  //banner
  getBannerAllList(): Observable<any> {
      return this.http.get(`http://localhost:3000/huawei/banner/getAllList`);
  }
  
  //地址api
  getAreaLevelList(): Observable<any> {
      return this.http.get('http://localhost:3000/huawei/area/getAllList');
      }
}