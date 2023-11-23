import { Injectable } from '@angular/core';

@Injectable()
export class CurrentLangService {
  currentLang: any = 'en';
  constructor() {}
  getCurrentLang() {
    this.currentLang = JSON.parse(localStorage.getItem('abpSession'));
    console.log(this.currentLang);
    return this.currentLang.language;
  }
}
