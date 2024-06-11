import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { IndexComponent } from './pages/index/index.component';
import { ListComponent } from './pages/list/list.component';
import { GoodsComponent } from './pages/goods/goods.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'shopping/:id',
    component: ShoppingComponent
  }, 
  {
    path: 'list',
    component:ListComponent
  },
  {
    path: "goods",
    component: GoodsComponent
  },
  {
    path: 'cart',
    component:CartComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }