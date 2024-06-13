import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  petData: BehaviorSubject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.petData = new BehaviorSubject<any>('');
  }

  // getPet(credentials: any): any {
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('session_token'));
  //   console.log('Headers: ', headers);
  // }
  body = {
    nombreMascota: "Lulu",
    edadMascota: 1,
    razaMascota: "Labrador",
    colorMascota: "Chocolate",
    ccMascota: "5656248",
    id_cliente: {
      idCliente: 1,
      role: "USER"
    }
  }

  //Create
  addNewPet(): Observable<any> {
    return this.http.post<Pet>('url', this.body);
  }
  //GetAll
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>('url');
  }
  //Update
  updatePet(pet: Pet): Observable<void> {
    const body = {};
    const id = 1;
    return this.http.put<void>('url/id', id, body);
  }
  //Delete
  deletePet(id: number): Observable<void> {
    return this.http.delete<void>('url/id');
  }


}