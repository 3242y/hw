import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DataService } from '../../service/share/data.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent{
  data: any;
  count:number = 0;
  serviceItems$=this.dataService.serviceItems$;
  constructor(private dataService: DataService,private router:Router) {
    this.serviceItems$.pipe(map(item => {
      return item
    })).subscribe(item => {
      this.data = item;
     this.count = this.data.length;
    })
  }
}