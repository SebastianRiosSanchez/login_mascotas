import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { PetsComponent } from './pages/pets/pets/pets.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { NewCustomerComponent } from './pages/customers/new-customer/new-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  // { path: 'inicio', component: DashboardComponent, canActivate: [nombreGuard] },
  { path: 'inicio', component: DashboardComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrarse', component: RegisterComponent },
  { path: 'mascotas', component: PetsComponent },
  { path: 'clientes', component: CustomersComponent },
  { path: 'crear-cliente', component: NewCustomerComponent },
  { path: 'veterinario', component: DoctorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
