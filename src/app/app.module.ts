import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';





const router : Routes = [
  // { path:'', component: AppComponent},
  // { path: '', component: AppComponent},
  // { path : '' , redirectTo:'/registation/template', pathMatch:'full' },
  { path : 'login' , component : LoginComponent},
  { path : 'registation/template', component: RegisterTemplateComponent},
  { path : 'registation/reactive', component: RegisterReactiveComponent},
  { path: 'add-user', component:AddUserComponent, canActivate: [AuthGuardService]},
  { path: 'users',loadChildren:"./users/users.module#UsersModule",canActivate: [AuthGuardService]}
 
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterTemplateComponent,
    RegisterReactiveComponent,
    NavbarComponent,
    AddUserComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    HttpClientModule
    
  ],
  providers: [AppService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
