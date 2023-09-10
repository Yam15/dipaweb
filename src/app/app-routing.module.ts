import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

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
  component :RegisterComponent

},
{
  path:"home",
  component :HomeComponent

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
