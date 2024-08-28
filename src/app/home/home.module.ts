import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../components/card/card.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { HttpService } from '../services/http.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [HomePage, CardComponent, ToolbarComponent],
  exports: [ToolbarComponent],
  providers: [HttpService],
})
export class HomePageModule {}
