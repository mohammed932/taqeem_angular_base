import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
    AuthRoutingModule
  ],
})
export class AuthModule {}
