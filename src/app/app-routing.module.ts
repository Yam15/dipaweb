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
  path:"homechimaltenango",
  canActivate: [AuthGuard],
  component : PcichimaltenangoComponent,
 

},
{
  path:"homeprogreso",
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
  path:"**",
  component :PageNotFoundComponent

},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
