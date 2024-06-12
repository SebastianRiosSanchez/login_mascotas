import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor(private http: HttpClient) {
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token") != null);
    this.currentUserData = new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
  }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.urlHost + "auth/login", credentials).pipe(
      tap((userData) => {
        sessionStorage.setItem("token", userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  logout(): void {
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producio un error ', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }

  get userData(): Observable<String> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }
}

// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { LoginRequest } from './loginRequest';
// import { Observable, throwError, catchError, BehaviorSubject, tap } from 'rxjs';
// import { User } from './user';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
//   currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ idCliente: 0, emailCliente: '' });

//   constructor(private http: HttpClient) { }

//   login(credentials: LoginRequest): Observable<User> {
//     return this.http.get<User>('././assets/data.json').pipe(
//       tap((userData: User) => {
//         this.currentUserData.next(userData);
//         this.currentUserLoginOn.next(true);
//       }),
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse) {
//     if (error.status === 0) {
//       console.error('Se ha producio un error ', error.error);
//     }
//     else {
//       console.error('Backend retornó el código de estado ', error.status, error.error);
//     }
//     return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
//   }

//   get userData(): Observable<User> {
//     return this.currentUserData.asObservable();
//   }

//   get userLoginOn(): Observable<boolean> {
//     return this.currentUserLoginOn.asObservable();
//   }

// }