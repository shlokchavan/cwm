import { Directive, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][capitalizeFirst]',
})
export class CapitalizeFirstLetterDirective {
  constructor(@Self() private ngControl: NgControl) {}

  ngOnInit() {
    const control = this.ngControl.control;
    if (control) {
      control.valueChanges.subscribe((value) => {
        if (typeof value === 'string') {
          this.ngControl.control!.setValue(this.capitalizeFirstLetter(value), {
            emitEvent: false,
          });
        }
      });
    }
  }

  capitalizeFirstLetter(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
