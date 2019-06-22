import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { BarRatingModule } from "ngx-bar-rating";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BarRatingModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class Tab1PageModule {}
