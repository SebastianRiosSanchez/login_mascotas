import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { PetsComponent } from './pages/pets/pets/pets.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrarse', component: RegisterComponent },
  { path: 'mascotas', component: PetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
