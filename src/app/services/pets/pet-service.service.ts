import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

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

  getPet(credentials: any): any {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('session_token'));
    console.log('Headers: ', headers);

    // return this.http.get<any>('http://localhost:8080/auth/register', { headers }).pipe(
    //   catchError((error) => {
    //     console.log('Error:', error); return throwError(error);
    //   })
    // );
  }

  // getPet(credentials: any): Observable<any> {
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('session_token'))
  //   return this.http.get<any>('http://localhost:8080/auth/register', { headers }).pipe(
  //     catchError((error) => {
  //       console.log('Error:', error); return throwError(error);
  //     })
  //   );
  // }


}
