import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesModule } from './directives/directives.module';
import { ComponentsModule } from './components/components.module';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { CommonInterceptor } from './interceptor/common.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { RegisterComponent } from './pages/register/register.component';
import { EmailLowercasePipe } from './pipes/email-lowercase.pipe';
import { PipesModule } from './pipes/pipes.module';
// import { MultiplyByFivePipe } from './multiply-by-five.pipe';

registerLocaleData(en);
const ngZorroConfig: NzConfig = {
  notification: { nzMaxStack: 1 },
  modal: { nzMaskClosable: false }
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmailLowercasePipe,
    // MultiplyByFivePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PipesModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: CommonInterceptor,
    },
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },

      EmailLowercasePipe // Thêm vào providers

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
