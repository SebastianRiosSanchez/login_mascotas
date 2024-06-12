import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../auth/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  userData: BehaviorSubject<User>;
  data: any;

  constructor(
    private http: HttpClient
  ) {
    this.userData = new BehaviorSubject<User>(
      {
        nombreCliente: '',
        apellidoCliente: '',
        ccCliente: '',
        emailCliente: '',
        direccionCliente: '',
        role: '',
      }
    );
  }

  dataUser = {
    nombreCliente: "usuario123@gmail.com",
    apellidoCliente: "usuario123@gmail.com",
    ccCliente: "1053963147",
    emailCliente: "usuario123@gmail.com",
    passCliente: "usuario123",
    direccionCliente: "calle 67a # 40-61"
  }

  // Ejemplo de petición POST
  register(): Observable<any> {
    return this.http.post<any>('http://localhost:8080/auth/register', this.dataUser);
  }

}
