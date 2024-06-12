import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/services/auth/user';
import { RegisterUserService } from 'src/app/services/register/register-user.service';

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

  usuario: any;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loadInfo() {
    this.usuario = this.registerForm.getRawValue();
    this.register(this.usuario);
  }

  register(data: any) {
    if (this.registerForm.valid) {
      this.registerService.register(data).subscribe(
        response => {
          console.log('Respuesta: ', response);
        }
      );
    }
  }



}
