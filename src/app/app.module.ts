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




const router : Routes = [
  // { path:'', component: AppComponent},
  // { path: '', component: AppComponent},
  // { path : '' , redirectTo:'/registation/template', pathMatch:'full' },
  { path : 'login' , component : LoginComponent},
  { path : 'registation/template', component: RegisterTemplateComponent},
  { path : 'registation/reactive', component: RegisterReactiveComponent},
  { path: 'users',loadChildren:"./users/users.module#UsersModule"}
 
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterTemplateComponent,
    RegisterReactiveComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    HttpClientModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
