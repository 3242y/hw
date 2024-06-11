import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../service/api/api';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'] // 注意是styleUrls，不是styleUrl
})
export class AreaComponent implements OnInit {
  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();
  provinces: any[] = [];
  cities: any[] = [];
  areas: any[] = [];
  cityList: any[] = [];
  areaList: any[] = [];
  newData: any = {};
  provinceName = "";
  cityName = "";
  areaName = "";
  selectedProvince: any | null = null;
  selectedCity: any | null = null;
  selectedArea: any | null = null;

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) {
    
  }


  getAreaLevelList() {
    this.apiService.getAreaLevelList().subscribe((result: any) => {  
      this.provinces = result.provinceList;
      this.cityList = result.cityList;
      this.areaList = result.areaList;
      }
    );
  }

  onProvinceChange(i: any) {
    this.cities = [];
    this.areas = [];
    this.cityList.forEach((item: any) => {
      if (item.parent_id == i) {
        this.cities.push(item);
        this.provinces.forEach((n: any) => {
          if(n.id==i){
            this.provinceName=n.area_name
          }
        })
      }
    })
    
  }

  onCityChange(i:any) {
    this.areas = [];
    this.areaList.forEach((item: any) => {
      if (item.parent_id == i) {
        this.areas.push(item);
        this.cityList.forEach((n: any) => {
          if(n.id==i){
            this.cityName=n.area_name
          }
        })
      }
    })
  }

  onAreaChange(i:any) {
    this.areaList.forEach((item: any) => {
      if (item.id == i) {
        this.areaName=item.area_name
      }
    })
    this.newData = {
      province: this.provinceName,
      city: this.cityName,
      area: this.areaName
    };
     // 发出事件并传递数据
    this.dataChange.emit(this.newData);
  }
  
  ngOnInit(): void {
    this.getAreaLevelList();
  }

}