import { FormControl } from '@angular/forms';

export class ModelFormControl extends FormControl {
  label: string;
  property: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.property = property;
  }

  get validationMessages(): string[] {
    const messages: string[] = [];
    if (this.errors) {
      for (const errorName in this.errors) {
        if (errorName === 'required') {
          messages.push(`${this.label} est requis.`);
        } else if (errorName === 'minlength') {
          messages.push(`${this.label} a au moins
                            ${this.errors.minlength.requiredLength} charactères.`);
        } else if (errorName === 'maxlength') {
          messages.push(`${this.label} a au plus
                            ${this.errors.maxlength.requiredLength} charactères.`);
        } else if (errorName === 'select') {
          messages.push(`${this.label} est invalide.`);
        } else if (errorName === 'min') {
          messages.push(`${this.value} est insuffisante.`);
        } else if (errorName === 'max') {
          messages.push(`${this.value} est insuffisante.`);
        }
      }
    }
    return messages;
  }
}
