import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/details/details.component';
import { RegisterComponent } from './auth/register/register.component';
import { PetsComponent } from './pages/pets/pets/pets.component';

import { PetInterceptorInterceptor } from './services/pets/pet-interceptor';
import { ErrorinterceptorService } from './services/auth/errorinterceptor.service';
import { DetailpetComponent } from './pages/pets/detailpet/detailpet.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { NewCustomerComponent } from './pages/customers/new-customer/new-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    DetailsComponent,
    RegisterComponent,
    PetsComponent,
    DetailpetComponent,
    CustomersComponent,
    DoctorComponent,
    NewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PetInterceptorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorinterceptorService, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
