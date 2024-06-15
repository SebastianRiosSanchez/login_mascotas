import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCustomerComponent } from 'src/app/pages/customers/new-customer/new-customer.component';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private modalService: NgbModal) { }

  open(data: any) {
    const modalRef = this.modalService.open(NewCustomerComponent);
    modalRef.componentInstance.data = data; // Pasar datos al modal si es necesario
    // Aquí puedes añadir configuraciones adicionales, manejar resultados, etc.
  }

}
