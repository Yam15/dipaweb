import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
nuevoMensaje: string ="";
constructor(){


}
enviarMensaje(){
  console.log(this.nuevoMensaje);
}
}
