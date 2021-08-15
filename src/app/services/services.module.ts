import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    RouterModule,
    ServicesRoutingModule
  ]
})

export class ServicesModule {}
