import { Injectable } from '@angular/core';

@Injectable()
export class FormatPhoneService {
  constructor() {}
  format(phone: any) {
    if (phone?.includes('+')) {
      return phone.trim().split('+')[1];
    } else return phone;
  }
}
