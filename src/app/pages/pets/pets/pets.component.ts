import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/services/pets/pet';
import { PetServiceService } from 'src/app/services/pets/pet-service.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {


  credentials: any;
  petList: Pet[] = [];

  constructor(
    private petService: PetServiceService
  ) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe(
      pets => {
        this.petList = [...pets];
      });
  }

}
