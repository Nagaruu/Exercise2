import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './components/login.component';
import { LoginRoutingModule } from './components/login-routing.module';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
];
  
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoginRoutingModule
  ],
  providers: [AuthGuard],
})
export class LoginModule { }
