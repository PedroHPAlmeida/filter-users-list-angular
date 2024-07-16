import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../../types/user/address.type';

@Pipe({
  name: 'toAddress'
})
export class ToAddressPipe implements PipeTransform {
  transform(address: Address): string {
    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}
