import { Injectable, NgZone } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  [x: string]: any;
usuario1="";
usuario = {
email: '',
password: '',
  }
  constructor(public afauth: AngularFireAuth ,public afAuth: Router, public ngZone: NgZone)  {
      // Setting logged in user in localstorage else null
      this.afauth.authState.subscribe((user) => {
        
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
          console.log('user');
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      });
    }

  async login(email: string, password: string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email,password);
    }catch(err){
      console.log("Error en Login",err);
      return null;
    }
  } 

  async register(email: string, password: string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    }catch(err){
      console.log("Error en Login",err);
      return null;
    }
  } 

  async loginwithgoogle(email: string, password: string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(err){
      console.log("Error en Login con google",err);
      return null;
    }
  }

  
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user == null) {
      return false;
    } else {
      return true;
    }

  }
  //obtengo el usuario 
  getUserLogged() {
    return this.afauth.authState;
  }

  logout() {
    this.afauth.signOut();
  }
   
}
