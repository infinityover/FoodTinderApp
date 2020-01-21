import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { BarRatingModule } from "ngx-bar-rating";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BarRatingModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'tinderfoodapp'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
    
  ],
  declarations: [Tab1Page],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class Tab1PageModule {}
