import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    HeaderPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,

    NzNotificationModule,
    NzCalendarModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzTabsModule,
    NzDropDownModule,
    NzAvatarModule,
    NzAffixModule,
    NzListModule,
    NzIconModule,
    NzBadgeModule,
    NzCardModule,
    NzCarouselModule,
    NzTimelineModule,
    NzCollapseModule,
    NzRadioModule,
    NzModalModule,
    NzDatePickerModule,
    NzSelectModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzUploadModule,
    NzCheckboxModule,
    NzTableModule,
    NzPaginationModule,
    NzImageModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzDrawerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,

    NzNotificationModule,
    NzCalendarModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzTabsModule,
    NzDropDownModule,
    NzAvatarModule,
    NzAffixModule,
    NzListModule,
    NzIconModule,
    NzBadgeModule,
    NzCardModule,
    NzCarouselModule,
    NzTimelineModule,
    NzCollapseModule,
    NzRadioModule,
    NzModalModule,
    NzDatePickerModule,
    NzSelectModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzUploadModule,
    NzCheckboxModule,
    NzTableModule,
    NzPaginationModule,
    NzImageModule,
    NzDividerModule,
    NzDescriptionsModule,
    NzPopconfirmModule,
    NzDrawerModule,
    BarChartComponent,
    LineChartComponent,
    HeaderPageComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ComponentsModule { }
