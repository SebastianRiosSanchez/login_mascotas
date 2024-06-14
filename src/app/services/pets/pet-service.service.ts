import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Pet } from './pet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  petData: BehaviorSubject<any>;

  constructor(
    private http: HttpClient,
  ) {
    this.petData = new BehaviorSubject<any>('');
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.urlHost}` + 'mascota').pipe(
      catchError((error: any) => {
        console.error("Error al obtener mascotas", error);
        return throwError(error);
      })
    );
  }
  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${environment.urlHost}` + 'mascota/' + `${id}`).pipe(
      catchError((error: any) => {
        console.error(`Error al obtener la mascota con el id: ${id}`);
        return throwError(error);
      })
    );
  }
  // Ejemplo de métodos adicionales

  // addNewPet(pet: Pet): Observable<Pet> {
  //   const token = sessionStorage.getItem("token");
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  //   return this.http.post<Pet>(environment.urlHost + 'mascota', pet, { headers }).pipe(
  //     catchError((error: any) => {
  //       console.error("Error al agregar mascota", error);
  //       return throwError(error);
  //     })
  //   );
  // }

  // updatePet(pet: Pet): Observable<void> {
  //   const token = sessionStorage.getItem("token");
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  //   return this.http.put<void>(`${environment.urlHost}mascota/${pet.id}`, pet, { headers }).pipe(
  //     catchError((error: any) => {
  //       console.error("Error al actualizar mascota", error);
  //       return throwError(error);
  //     })
  //   );
  // }

  // deletePet(id: number): Observable<void> {
  //   const token = sessionStorage.getItem("token");
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  //   return this.http.delete<void>(`${environment.urlHost}mascota/${id}`, { headers }).pipe(
  //     catchError((error: any) => {
  //       console.error("Error al eliminar mascota", error);
  //       return throwError(error);
  //     })
  //   );
  // }
}
