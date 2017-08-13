import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';

import {AF} from "./providers/af";
import {CA} from "./providers/CanActivateViaAuthGuard";
import {CAV} from "./providers/CanActiveVotos";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { VotarPageComponent } from './votar-page/votar-page.component';

const routes: Routes = [
 {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
   { 
     path: 'login', 
     component: LoginPageComponent,
     canActivate: [CA]
    },
    { 
      path: 'votar',
      component: VotarPageComponent,
      canActivate: [CAV]
    },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    VotarPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AF,
  CA,
  CAV],
  bootstrap: [AppComponent]
})
export class AppModule { }
