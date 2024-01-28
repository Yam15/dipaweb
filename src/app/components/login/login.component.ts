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
         this.router.navigate(['/homechimaltenango3434EWE'])
         
           break; 
       } 
       case "dipafrontpciprogreso@gmail.com" : { 
        console.log("Bienvenido PCI El PROGRESO GUASTATOYA",user);
        window.alert('Bienvenido PCI PROGRESO');
      //  this.irapagina
        this.router.navigate(['/homeprogreso84756GEEE'])
        
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

      case "delegacionaguascalienteschiqui@gmail.com" : { 
        console.log("Bienvenida delegacion Aguas Calientes",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Aguas Calientes');
        this.router.navigate(['/homedelafuascalienteschiqui02'])
        
          break; 
      }

      case "delegacionmundomayapeten@gmail.com" : { 
        console.log("Bienvenida delegacion Mundo Maya peten",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Mundo Maya Peten');
        this.router.navigate(['/homemundomayapeten20246'])
        
          break; 
      }
      case "delegaciontecunumansanmarcos@gmail.com" : { 
        console.log("Bienvenida delegacion Tecun Uman",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Tecun Uman');
        this.router.navigate(['/homedeltecunumansanmarcos0002'])
        
          break; 
      }
      case "delegacionaeropuertoauroraguat@gmail.com" : { 
        console.log("Bienvenida delegacion Aeropuerto Aurora",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Aeropuerto Aurora');
        this.router.navigate(['/homedelaeropuertolaaurora0001'])
        
          break; 
      }

      case "pcilivingston@gmail.com" : { 
        console.log("Bienvenido PCI Livingston",user);
      //  this.irapagina
        window.alert('Bienvenido PCI Livingston');
        this.router.navigate(['/homepcilivingston202121'])
        
          break; 
      }

      case "delegacionvallenuevogt@gmail.com" : { 
        console.log("Bienvenida delegacion Valle Nuevo",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Valle Nuevo');
        this.router.navigate(['/homevallenuevo20244'])
        
          break; 
      }

      case "delegacionpuertoquetzal@gmail.com" : { 
        console.log("Bienvenida delegacion Puerto Quetzal",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Puerto Quetzal');
        this.router.navigate(['/homedelegacionpuertoquetzalesc01'])
        
          break; 
      }

      
      case "delegacionvallenuevogt@gmail.com" : { 
        console.log("Bienvenida delegacion El Carmen",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion El Carmen');
        this.router.navigate(['/homedelcarmensanmarcos20204'])
        
          break; 
      }

      case "delegacionsantotomasizabal@dipaweb.com" : { 
        console.log("Bienvenida delegacion Santo Tomas Castilla",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion Santo Tomas Castilla');
        this.router.navigate(['/homedelsantotomasdecastillaizaba203454'])
        
          break; 
      }

      case "delegacionmelchorpeten@dipaweb.com" : { 
        console.log("Bienvenida delegacion Mencos Peten",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion Mencos Peten');
        this.router.navigate(['/homedelmencospeten74653r'])
        
          break; 
      }
      case "delegacionaeropuertoretal@dipaweb.com" : { 
        console.log("Bienvenida delegacion Aeropuerto Retalhuleu",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion Aeropuerto Retalhuleu');
        this.router.navigate(['/homedelaeropuertoretalhuleu875'])
        
          break; 
      }
      case "delegacionaerodromopuertosanjose@dipaweb.com" : { 
        console.log("Bienvenida delegacion Aerodromo Puerto San Jose",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion Aerodromo Puerto San Jose');
        this.router.navigate(['/homeaerodromopuertosanjose256743'])
        
          break; 
      }

      case "delegacionaerodromomundomaya@dipaweb.com" : { 
        console.log("Bienvenida delegacion Mundo Maya",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion Mundo Maya');
        this.router.navigate(['/homeaerodromomundomayaretalh746593'])
        
          break; 
      }

      case "dipafrontpcicorintoizabal@dipaweb.com" : { 
        console.log("Bienvenida delegacion PCI Corinto",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion PCI Corinto');
        this.router.navigate(['/homedelegacionpcicorinto8474312'])
        
          break; 
      }

      case "delegacionsancristobaljutiapa@dipaweb.com" : { 
        console.log("Bienvenida delegacion San Cristobal",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion San Cristobal');
        this.router.navigate(['/homedelegacionsancrisjutiapa846653'])
        
          break; 
      }

      case "dipafrontpcipajapitasanmarcos@dipaweb.com" : { 
        console.log("Bienvenida delegacion PCI Pajapita",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion PCI Pajapita');
        this.router.navigate(['/homedelegacionpajapitapci57764'])
        
          break; 
      }

      case "" : { 
        console.log("Bienvenido Jefe",user);
      //  this.irapagina
        window.alert('Bienvenido Jefe');
        this.router.navigate(['/secciondeinformaticacarlosguerra1515'])
        
          break; 
      }

      case "delegacionaedronomopuertobarrios@dipaweb.com" : { 
        console.log("Bienvenida delegacion Aerodromo Puerto Barrios",user);
      //  this.irapagina
        window.alert('Bienvenida delegacion Aerodromo Puerto Barrios');
        this.router.navigate(['/homedelegacionaerodromopuertobarrios8374762'])
        
          break; 
      }


      case "delegacionpedrodealvarado@gmail.com" : { 
        console.log("Bienvenida delegacion Pedro de Alvarado",user);
      //  this.irapagina
        window.alert('Bienvenida Delegacion Pedro de Alvarado');
        this.router.navigate(['/homedelpedrodealvarado010101002'])
        
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
