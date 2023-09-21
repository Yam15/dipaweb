import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChatComponent } from './components/chat/chat.component';
import { PcichimaltenangoComponent } from './homeprivate/pcichimaltenango/pcichimaltenango.component';


//import { RegisterComponent } from './component/register/register.component';

const firebaseConfig = { // conectando con app de firebase
  apiKey: "AIzaSyCRHhYEjHCcZBzOxJKmkTcPYpdXHAeSi1I",
  authDomain: "pncdipawebgt.firebaseapp.com",
  projectId: "pncdipawebgt",
  storageBucket: "pncdipawebgt.appspot.com",
  messagingSenderId: "1000252595893",
  appId: "1:1000252595893:web:57e17f95d3793851e268fc"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatComponent,
    PcichimaltenangoComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, //forms
    AngularFireModule.initializeApp(firebaseConfig),
    PdfViewerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
