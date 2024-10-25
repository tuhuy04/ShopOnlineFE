import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { UserSettingComponent } from 'src/app/pages/user-setting/user-setting.component';
import { CreateUserComponent } from 'src/app/pages/user-setting/create-user/create-user.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UserSettingComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule
  ]
})
export class MainModule { }
