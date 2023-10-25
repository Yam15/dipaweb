import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
[x: string]: any;
usuario1="";
  usuario = {
    email: '',
    password: '',
  }

  ngOnInit() {
 
  }

  constructor(private authService: AuthService, private router: Router) { }
  
  Ingresar() {
    
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(user => {
      
      switch(email) { 
        
        case "carlosguerra@gmail.com": { 
          console.log("Bienvenido Carlos");
          console.log("Bienvenido  Administrador", user);
          this.router.navigate(['/panelDeControl'])
        
      //this.router.navigate(['/register'])
           break; 
        } 
       case "dipafrontpcichimaltenango@gmail.com" : { 
         console.log("Bienvenido PCI CHIMALTENANGO",user);
       //  this.irapagina
         window.alert('Bienvenido PCI Chimaltenango');
         this.router.navigate(['/homechimaltenango'])
         
           break; 
       } 
       case "dipafrontpciprogreso@gmail.com" : { 
        console.log("Bienvenido PCI El PROGRESO GUASTATOYA",user);
        window.alert('Bienvenido PCI PROGRESO');
      //  this.irapagina
        this.router.navigate(['/homeprogreso'])
        
          break; 
      } 
      case "delegacionpuertobarriosizabal@gmail.com" : { 
        console.log("Bienvenida delegacion Puerto Barrios",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Puerto Barrios');
        this.router.navigate(['/homedelpuertobarrios01'])
        
          break; 
      } 
      case "delegacionaeropuertolosaltos@gmail.com" : { 
        console.log("Bienvenida delegacion los altos",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Aeropuerto Los Altos');
        this.router.navigate(['/homedelaeropuertlosaltos002'])
        
          break; 
      } 
        default: { 
          if(!user) {
           // alert("Datos incorrectos, ingresa con el usuario y contraseña asignada!");
            window.alert('Datos incorrectos');
            return;
          }
           break; 
        } 
     } 
      
    }).catch(err=>{
      console.log(err)
    })
  }
  logout() {
    this.authService.logout();
  }
  
  //irapagina(){
// console.log('metodo ir a pagina');

  //}
}
