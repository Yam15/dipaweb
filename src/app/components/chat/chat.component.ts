import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit{
mostrarChat = false;
usuarioLogeado : any ;
nuevoMensaje: string ="";
mensajes: any =[
{
 emisor: "id",
 texto: "Hola Que Tal" 
},
{
  emisor: "id",
  texto: "Espero que estes bien" 
 },
 {
  emisor: "id",
  texto: "Bienvenido a DIPAWEB" 
 },
 {
  emisor: "id",
  texto: "Del Departamento de Apoyo y Logistica" 
 },
 {
  emisor: "id",
  texto: "De la sección de Informatica" 
 }
] 

constructor(private authService:AuthService){


}
  ngOnInit(): void {
   
    this.authService.getUserLogged().subscribe(usuario =>{this. usuarioLogeado=usuario;
    });
  }
enviarMensaje(){
  console.log(this.nuevoMensaje);
  let mensaje={
    emisor: this.usuarioLogeado.uid,
    texto: this.nuevoMensaje 
   }
   this.mensajes.push(mensaje);
  this.nuevoMensaje = "**";
  // coloca el ultimo mensaje 
 

}


}
