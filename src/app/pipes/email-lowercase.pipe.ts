import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailLowercase'
})
export class EmailLowercasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    const [localPart, domain] = value.split('@');
    return localPart.toLowerCase() + '@' + domain;
  }
}
