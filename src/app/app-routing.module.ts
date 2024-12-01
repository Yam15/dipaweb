import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PcichimaltenangoComponent } from './homeprivate/pcichimaltenango/pcichimaltenango.component';
import { AuthGuard } from './shared/auth.guard';
import { PciprogresoComponent } from './homeprivate/pciprogreso/pciprogreso.component';
import { Delegacionpbi01Component } from './homeprivate/delegacionpbi01/delegacionpbi01.component';
import { DelegaerolosaltosComponent } from './homeprivate/delegaerolosaltos/delegaerolosaltos.component';
import { Delegacioncch02Component } from './homeprivate/delegacioncch02/delegacioncch02.component';
import { DelegaciontusmComponent } from './homeprivate/delegaciontusm/delegaciontusm.component';
import { DelegacionaeroauroraComponent } from './homeprivate/delegacionaeroaurora/delegacionaeroaurora.component';
import { DelegacionpedroalvaradoComponent } from './homeprivate/delegacionpedroalvarado/delegacionpedroalvarado.component';
import { DelegacionvallenuevoComponent } from './homeprivate/delegacionvallenuevo/delegacionvallenuevo.component';
import { PcilivingstonComponent } from './homeprivate/pcilivingston/pcilivingston.component';
import { PetenComponent } from './homeprivate/peten/peten.component';
import { DelegacionelcarmenComponent } from './homeprivate/delegacionelcarmen/delegacionelcarmen.component';
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
import { ChatComponent } from './components/chat/chat.component';
import { NominaDeJefesComponent } from './homeprivate/nomina-de-jefes/nomina-de-jefes.component';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { ProtocolosComponent } from './components/protocolos/protocolos.component';



const routes: Routes = [
//creando rutas de llamado
{
  pathMatch : 'full',
  path:"",
  redirectTo:"home"
 
 },
{
  path:"login",
  component :LoginComponent
 
 },
 
 {
  path:"register",
  canActivate: [AuthGuard],
  component :RegisterComponent

},
{
  path:"home",
  component :HomeComponent

},
{
  path:"homeprotocolos",
  component :ProtocolosComponent

},
{
  path:"chat",
  component :ChatComponent

},
{
  path:"homechimaltenango3434EWE",
  canActivate: [AuthGuard],
  component : PcichimaltenangoComponent,
 

},
{
  path:"homeprogreso84756GEEE",
  canActivate: [AuthGuard],
  component : PciprogresoComponent,
 

},
{
  path:"homedelpuertobarrios01",
  canActivate: [AuthGuard],
  component : Delegacionpbi01Component,
 

},
{
  path:"homedelaeropuertlosaltos002",
  canActivate: [AuthGuard],
  component : DelegaerolosaltosComponent,
 

},
{
  path:"homedelafuascalienteschiqui02",
  canActivate: [AuthGuard],
  component : Delegacioncch02Component,
 

},
{
  path:"homedeltecunumansanmarcos0002",
  canActivate: [AuthGuard],
  component : DelegaciontusmComponent,
 

},
{
  path:"homedelaeropuertolaaurora0001",
  canActivate: [AuthGuard],
  component : DelegacionaeroauroraComponent,
 

},
{
  path:"homedelpedrodealvarado010101002",
  canActivate: [AuthGuard],
  component : DelegacionpedroalvaradoComponent,
 

},

{
  path:"homevallenuevo20244",
  canActivate: [AuthGuard],
  component : DelegacionvallenuevoComponent,
 

},
{
  path:"homepcilivingston202121",
  canActivate: [AuthGuard],
  component : PcilivingstonComponent,
 

},
{
  path:"homedelegacionpuertoquetzalesc01",
  canActivate: [AuthGuard],
  component : DelegacionpuertoquetzalComponent,
 

},
{
  path:"homemundomayapeten20246",
  canActivate: [AuthGuard],
  component : PetenComponent,
 

},

{
  path:"homedelcarmensanmarcos20204",
  canActivate: [AuthGuard],
  component : DelegacionelcarmenComponent,
 

},

{
  path:"homedelaeropuertoretalhuleu875",
  canActivate: [AuthGuard],
  component : DelegacionaeropuertoretalComponent,
 

},

{
  path:"homedelmencospeten74653r",
  canActivate: [AuthGuard],
  component : DelegacionmencospetenComponent,
 

},
{
  path:"homeaerodromopuertosanjose256743",
  canActivate: [AuthGuard],
  component : DelegacionaerodromopuertosanjoseComponent,
 

},

{
  path:"homeaerodromomundomayaretalh746593",
  canActivate: [AuthGuard],
  component : DelegacionaerodromomundomayaretalComponent,
 

},

{
  path:"homedelegacionpcicorinto8474312",
  canActivate: [AuthGuard],
  component : DelegacionpcicorintoComponent,
 

},

{
  path:"homedelegacionsancrisjutiapa846653",
  canActivate: [AuthGuard],
  component : DelegacionsancrisjutiapaComponent,
 

},

{
  path:"homedelegacionaerodromopuertobarrios8374762",
  canActivate: [AuthGuard],
  component : DelegacionaedronomopuertobarriosComponent,
 

},

{
  path:"homedelegacionpajapitapci57764",
  canActivate: [AuthGuard],
  component : DelegacionpcipajapitasanmarcosComponent,
 

},

{
  path:"homepcivadohondo448226547",
  canActivate: [AuthGuard],
  component : PcivadohondoComponent,
 

},

{
  path:"homepcipasaco6468jdhf",
  canActivate: [AuthGuard],
  component : PcipasacojutiapaComponent,
 

},

{
  path:"homepcijerez482236fdsa",
  canActivate: [AuthGuard],
  component : PcijerezComponent,
 

},

{
  path:"secciondeinformaticacarlosguerra1515",
  canActivate: [AuthGuard],
  component : SecciondeinformaticaComponent,
 

},

{
  path:"homedelsantotomasdecastillaizaba203454",
  canActivate: [AuthGuard],
  component : DelegacionsanttomascastComponent,
 

},

{
  path:"homedelpciescuinltla5484754414",
  canActivate: [AuthGuard],
  component : PciescuintlaComponent,
 

},

{
  path:"homeseccioncarburantes1545645884sd3eddf",
  canActivate: [AuthGuard],
  component : CARBURANTESComponent,
 

},
{
  path:"homeseccionnominadejefesy7547yurhhf77uyr3eddf",
  canActivate: [AuthGuard],
  component : NominaDeJefesComponent,
 

},

{
  path:"homesecciondatosurgentes7547yjjds7566586jnfmf",
  canActivate: [AuthGuard],
  component : DatosGeneralesComponent,
 

},

{
  path:"**",
  component :PageNotFoundComponent

},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
