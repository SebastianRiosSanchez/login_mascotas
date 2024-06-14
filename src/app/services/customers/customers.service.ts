import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  //Crear nuevo cliente
  addNewCustomer(customer: any): Observable<any> {
    return this.http.post(`${environment.urlHost}` + 'cliente', customer).pipe(
      catchError((error: any) => {
        console.error(`Error al obtener crear cliente ${error}`);
        return throwError(error);
      })
    );
  }

  //Obtener todos los clientes/dueños
  getCustomers(): Observable<any> {
    return this.http.get<any[]>(`${environment.urlHost}` + 'cliente').pipe(
      catchError((error: any) => {
        console.log(`Error al obtener clientes ${error}`);
        return throwError(error);
      })
    );
  }

  //Obtener cliente x id
  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.urlHost}` + 'cliente/' + `${id}`).pipe(
      catchError((error: any) => {
        console.error(`Error al obtener la mascota con el id: ${id}`);
        return throwError(error);
      })
    );
  }

  //Actualizar cliente
  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put<any>(`${environment.urlHost}` + 'cliente/' + `${id}`, customer).pipe(
      catchError((error: any) => {
        console.error(`Error al obtener la mascota con el id: ${id}`);
        return throwError(error);
      })
    );
  }

  //Eliminar cliente
  deleteCustomer(id: number): void {
    this.http.delete<void>(`${environment.urlHost}cliente/${id}`).pipe(
      catchError((error: any) => {
        console.error(`Error al obtener la mascota con el id: ${id}`);
        return throwError(error);
      })
    );
  }


}
