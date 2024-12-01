import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AuthService } from './services/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { PciprogresoComponent } from './homeprivate/pciprogreso/pciprogreso.component';
import { Delegacionpbi01Component } from './homeprivate/delegacionpbi01/delegacionpbi01.component';
import { DelegaerolosaltosComponent } from './homeprivate/delegaerolosaltos/delegaerolosaltos.component';
import { Delegacioncch02Component } from './homeprivate/delegacioncch02/delegacioncch02.component';
import { DelegaciontusmComponent } from './homeprivate/delegaciontusm/delegaciontusm.component';
import { DelegacionaeroauroraComponent } from './homeprivate/delegacionaeroaurora/delegacionaeroaurora.component';
import { DelegacionpedroalvaradoComponent } from './homeprivate/delegacionpedroalvarado/delegacionpedroalvarado.component';
import { DelegacionvallenuevoComponent } from './homeprivate/delegacionvallenuevo/delegacionvallenuevo.component';
import { DelegacionelcarmenComponent } from './homeprivate/delegacionelcarmen/delegacionelcarmen.component';
import { PcilivingstonComponent } from './homeprivate/pcilivingston/pcilivingston.component';
import { PetenComponent } from './homeprivate/peten/peten.component';
import { DelegacionpuertoquetzalComponent } from './homeprivate/delegacionpuertoquetzal/delegacionpuertoquetzal.component';
import { DelegacionsanttomascastComponent } from './homeprivate/delegacionsanttomascast/delegacionsanttomascast.component';
import { DelegacionaeropuertoretalComponent } from './homeprivate/delegacionaeropuertoretal/delegacionaeropuertoretal.component';
import { DelegacionmencospetenComponent } from './homeprivate/delegacionmencospeten/delegacionmencospeten.component';
import { DelegacionaerodromopuertosanjoseComponent } from './homeprivate/delegacionaerodromopuertosanjose/delegacionaerodromopuertosanjose.component';
import { DelegacionaerodromomundomayaretalComponent } from './homeprivate/delegacionaerodromomundomayaretal/delegacionaerodromomundomayaretal.component';
import { DelegacionpcicorintoComponent } from './homeprivate/delegacionpcicorinto/delegacionpcicorinto.component';
import { DelegacionsancrisjutiapaComponent } from './homeprivate/delegacionsancrisjutiapa/delegacionsancrisjutiapa.component';
import { DelegacionaedronomopuertobarriosComponent } from './homeprivate/delegacionaedronomopuertobarrios/delegacionaedronomopuertobarrios.component';
import { DelegacionpcipajapitasanmarcosComponent } from './homeprivate/delegacionpcipajapitasanmarcos/delegacionpcipajapitasanmarcos.component';
import { PcivadohondoComponent } from './homeprivate/pcivadohondo/pcivadohondo.component';
import { PcipasacojutiapaComponent } from './homeprivate/pcipasacojutiapa/pcipasacojutiapa.component';
import { PcijerezComponent } from './homeprivate/pcijerez/pcijerez.component';
import { SecciondeinformaticaComponent } from './homeprivate/secciondeinformatica/secciondeinformatica.component';
import { PciescuintlaComponent } from './homeprivate/pciescuintla/pciescuintla.component';
import { CARBURANTESComponent } from './homeprivate/carburantes/carburantes.component';
import { NominaDeJefesComponent } from './homeprivate/nomina-de-jefes/nomina-de-jefes.component';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { ProtocolosComponent } from './components/protocolos/protocolos.component';


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
    PciprogresoComponent,
    Delegacionpbi01Component,
    DelegaerolosaltosComponent,
    Delegacioncch02Component,
    DelegaciontusmComponent,
    DelegacionaeroauroraComponent,
    DelegacionpedroalvaradoComponent,
    DelegacionvallenuevoComponent,
    DelegacionelcarmenComponent,
    PcilivingstonComponent,
    PetenComponent,
    DelegacionpuertoquetzalComponent,
    DelegacionsanttomascastComponent,
    DelegacionaeropuertoretalComponent,
    DelegacionmencospetenComponent,
    DelegacionaerodromopuertosanjoseComponent,
    DelegacionaerodromomundomayaretalComponent,
    DelegacionpcicorintoComponent,
    DelegacionsancrisjutiapaComponent,
    DelegacionaedronomopuertobarriosComponent,
    DelegacionpcipajapitasanmarcosComponent,
    PcivadohondoComponent,
    PcipasacojutiapaComponent,
    PcijerezComponent,
    SecciondeinformaticaComponent,
    PciescuintlaComponent,
    CARBURANTESComponent,
    NominaDeJefesComponent,
    DatosGeneralesComponent,
    ProtocolosComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, //forms
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
