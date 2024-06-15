import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { ModalServiceService } from 'src/app/services/modal/modal-service.service';
import { NewCustomerComponent } from './new-customer/new-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {

  customersList: any[] = [];


  constructor(
    private customerService: CustomersService,
    private router: Router,
    private modalService: ModalServiceService
  ) { }

  ngOnInit(): void {
    //Llamado al método para cargar los datos
    this.loadInfo();
  }

  //Método en cargado de traer los datos para llenar la tabla con los registros de clientes en la base de datos
  loadInfo() {
    this.customerService.getCustomers().subscribe(
      {
        next: (response) => {
          this.customersList = [...response];
          console.log('Lista de clientes: ', this.customersList);
        },
        error: (errorData) => {
          console.error(errorData);
        },
        complete: () => {
          console.log('Completado Clientes');
        }
      }
    );
  }

  //Método para crear cliente
  addNewCustomer() {
    const modalRef = this.modalService.open(NewCustomerComponent);

  }

  //Método para editar un cliente
  openEditCustomer() {
    console.log('crear un cliente nuevo');
  }

  //Método para eliminar un usuario
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id);
  }


}
