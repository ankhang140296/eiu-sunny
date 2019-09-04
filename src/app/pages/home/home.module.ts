import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { CountdownComponent } from './countdown/countdown.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { HomeComponent } from './home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    PricingTableComponent,
    CountdownComponent,
    OurServicesComponent,
    SponsorsComponent,
    SlideshowComponent
  ]
})
export class HomeModule { }
