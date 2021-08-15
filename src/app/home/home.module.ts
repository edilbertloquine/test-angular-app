import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomePricingComponent } from './home-pricing/home-pricing.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeFeaturesComponent,
    HomeContactComponent,
    HomePricingComponent
  ],
  imports: [
    RouterModule,
    HomeRoutingModule,
    FormsModule,
    CommonModule
  ]
})

export class HomeModule {}
