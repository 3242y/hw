import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serviceItems = new BehaviorSubject<any[]>([]);
  serviceItems$ = this.serviceItems.asObservable();
  checked:boolean=false;
  
  addService(item: any) {
    const serviceItems = this.serviceItems.value;
    item.push(this.checked);
    serviceItems.push(item);
    // serviceItems.push(this.checked);
    this.serviceItems.next(serviceItems);
  }
  clearServiceItem() {
    this.serviceItems.next([]);
  }
}