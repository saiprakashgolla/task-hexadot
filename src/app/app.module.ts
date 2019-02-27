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
// import { NavbarComponent } from './navbar/navbar.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { MessageService } from './message.service';
import { FilterPipe } from './app.filter';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollEventModule } from 'ngx-scroll-event';
import {NgAutoCompleteModule} from "ng-auto-complete";
import { AutoCompleteFilterComponent } from './auto-complete-filter/auto-complete-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const router : Routes = [
  // { path:'', component: AppComponent},
  // { path: '', component: AppComponent},
  { path : '' , redirectTo:'login', pathMatch:'full' },
  { path : 'login' , component : LoginComponent},
  { path : 'registation/template', component: RegisterTemplateComponent},
  { path : 'registation/reactive', component: RegisterReactiveComponent},
  { path: 'add-user', component:AddUserComponent, canActivate: [AuthGuardService]},
  { path:'auto-complete-filter', component:AutoCompleteFilterComponent},
  { path: 'users',loadChildren:"./users/users.module#UsersModule",canActivate: [AuthGuardService]}
 
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterTemplateComponent,
    RegisterReactiveComponent,
    // NavbarComponent,
    AddUserComponent,
    HeaderComponent,
    FilterPipe,
    AutoCompleteFilterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    InfiniteScrollModule,
    ScrollEventModule,
    NgAutoCompleteModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule

  ],

  providers: [AppService,
    AuthService,
    AuthGuardService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
