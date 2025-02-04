import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPaseComponent } from './pages/basics-pase/basics-pase.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { toggleCasePipe } from './pipes/toggle-case.pipe';
import { FlyingPipe } from './pipes/flying.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';



@NgModule({
  declarations: [

    BasicsPaseComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    FlyingPipe,
    SortByPipe,
    toggleCasePipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
