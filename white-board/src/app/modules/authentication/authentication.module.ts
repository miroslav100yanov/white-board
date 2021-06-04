import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { environment } from './../../../environments/environment';
import { AuthenticationComponent } from './authentication.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFireStorageModule } from '@angular/fire/storage'



@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    AuthenticationRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    HeaderModule
  ]
})
export class AuthenticationModule { }
