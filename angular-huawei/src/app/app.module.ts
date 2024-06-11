import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import { ShoppingComponent } from './pages/shopping/shopping.component'
import { TopComponent } from './components/top/top.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './pages/list/list.component';
import { GoodsComponent } from './pages/goods/goods.component';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevUIModule } from 'ng-devui';
import { AreaComponent } from './pages/area/area.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { LinkComponent } from './components/link/link.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShoppingComponent,
    TopComponent,
    SwiperComponent,
    BottomComponent,
    ProductComponent,
    ListComponent,
    GoodsComponent,
    CartComponent,
    AreaComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DevUIModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    NzStepsModule,
    NzCheckboxModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: zh_CN },
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
