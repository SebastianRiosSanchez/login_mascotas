import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customersList: any[] = [];


  constructor(
    private customerService: CustomersService,
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

  }

  //Método para editar un cliente
  openEditCustomer() {

  }

  //Método para eliminar un usuario
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id);
  }


}
