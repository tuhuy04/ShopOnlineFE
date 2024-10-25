import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplyByFivePipe } from './multiply-by-five.pipe';


@NgModule({
  declarations: [MultiplyByFivePipe],
  imports: [
    CommonModule
  ],
  exports: [MultiplyByFivePipe]
})
export class PipesModule { }
