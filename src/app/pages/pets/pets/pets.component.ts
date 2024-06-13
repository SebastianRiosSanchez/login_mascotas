import { Component, OnInit } from '@angular/core';
import { PetServiceService } from 'src/app/services/pets/pet-service.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(
    private petService: PetServiceService
  ) { }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(): any {
   this.petService.getPet
  }


}
