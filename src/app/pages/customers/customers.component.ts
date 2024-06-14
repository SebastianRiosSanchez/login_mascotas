import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    //Llamado al método para cargar los datos
    this.loadInfo();
  }

  //Método en cargado de traer los datos para llenar la tabla con los registros de clientes en la base de datos
  loadInfo() {
    this.customerService.getCustomers().subscribe(
      {
        next: (response) => {
          console.log('Lista de clientes: ', response);
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


}
