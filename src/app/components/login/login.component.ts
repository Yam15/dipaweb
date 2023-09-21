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
         console.log("Bienvenido PCI CHIMALTENANGO");
       //  this.irapagina
         this.router.navigate(['/homechimaltenango'])
           break; 
       } 
        default: { 
          if(!user) {
            alert("Datos incorrectos, si no tenes cuenta registrate!");
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
