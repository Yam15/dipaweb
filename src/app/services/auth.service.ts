import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) {}

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
  //obtengo el usuario 
  getUserLogged() {
    return this.afauth.authState;
  }

  logout() {
    this.afauth.signOut();
  }
   
}
