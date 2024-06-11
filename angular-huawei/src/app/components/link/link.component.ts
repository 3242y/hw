import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent implements OnInit{

  @ViewChild('navBox', { static: true }) navBoxElement!: ElementRef;
  @ViewChild('bannerBox', { static: true }) bannerBoxElement!: ElementRef;
  isShow: any;
  constructor(private router: Router) {
  }


  goSearch() {
    const divElement = this.navBoxElement.nativeElement;
    divElement.style.display = (divElement.style.display === 'none') ? 'block' : 'none';
    const bannerElement = this.bannerBoxElement.nativeElement;
    bannerElement.style.display = (bannerElement.style.display === 'none') ? 'block' : 'none';
  }
  move() {
    const divElement = this.navBoxElement.nativeElement;
    divElement.style.display = (divElement.style.display === 'none') ? 'block' : 'none';
    const bannerElement = this.bannerBoxElement.nativeElement;
    bannerElement.style.display = (bannerElement.style.display === 'none') ? 'block' : 'none';
  }
  onEnterPress(event: any): void {
    // 在这里编写按下Enter键时你想要执行的代码
    this.router.navigate(["/list"]) 
    event.preventDefault(); // 阻止默认的表单提交行为（如果需要的话）
  }
  searchBtn() {
    this.router.navigate(["/list"]) 
  }
  ngOnInit() {
    const divElement = this.navBoxElement.nativeElement;
    const bannerElement = this.bannerBoxElement.nativeElement;
    divElement.style.display = 'block';
    bannerElement.style.display = 'none';
  }
}
