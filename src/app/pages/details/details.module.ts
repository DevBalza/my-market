import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { HomePageModule } from 'src/app/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    HttpClientModule,
    HomePageModule,
  ],
  declarations: [DetailsPage],
  providers: [HttpService],
})
export class DetailsPageModule {}
