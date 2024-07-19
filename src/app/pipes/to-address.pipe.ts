import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../types/user/address.type';

@Pipe({
  name: 'toAddress'
})
export class ToAddressPipe implements PipeTransform {
  transform(address: Address): string {
    const INVALID_ADDRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      address.numero === undefined || address.numero === null;

    if(INVALID_ADDRESS) {
      return 'Endereço indisponível ou inválido';
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}
