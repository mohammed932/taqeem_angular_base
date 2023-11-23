import { Injectable } from '@angular/core';

@Injectable()
export class FormatLabelService {
  constructor() {}
  patientLabel(patients: any[]): string {
    return patients
      .map((patient) => Object.values(patient).join(' / '))
      .join(', ');
  }
}
