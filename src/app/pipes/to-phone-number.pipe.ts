import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPhoneNumber'
})
export class ToPhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length !== 11) {
      return value;
    }
    value = value.replace(/\D/g, '');
    return `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
  }
}
