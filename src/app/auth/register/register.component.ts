import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    nombreCliente: ['', Validators.required],
    apellidoCliente: ['', Validators.required],
    ccCliente: ['', Validators.required],
    emailCliente: ['', Validators.required],
    passCliente: ['', Validators.required],
    direccionCliente: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.valid) {
      console.log('Formulario: ', this.registerForm.value);
    }
   
  }


}
