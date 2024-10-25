import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyByFive'
})
export class MultiplyByFivePipe implements PipeTransform {

  transform(value: any): any {

    if (!isNaN(value)) {
      return value * 5;
    }
    return value;
  }

}
