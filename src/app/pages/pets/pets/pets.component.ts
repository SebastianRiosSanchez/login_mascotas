import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';
import { PetServiceService } from 'src/app/services/pets/pet-service.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {


  credentials: any;
  petList: Pet[] = [];
  jsonList: any;


  constructor(
    private petService: PetServiceService,
    
  ) { }

  ngOnInit(): void {
    this.loadInfo();
    this.getPetByid();
  }

  loadInfo() {
    this.petService.getPets().subscribe(
      {
        next: (response) => {
          this.petList = [...response];
          console.log(this.petList);
        },
        error: (errorData) => {
          console.log(errorData);
        },
        complete: () => {
          console.log('Completado...');
        }
      }
    );
  }

  getPetByid() {
    this.petService.getPetById(1).subscribe(
      {
        next: (response) => {
          console.log(response);
        },
        error: (errorData) => {
          console.log(errorData);
        },
        complete: () => {
          console.log('Completado...');
        }
      }
    );
  }

  openEditPet() {
    console.log('Editar mascota');

  }

}
