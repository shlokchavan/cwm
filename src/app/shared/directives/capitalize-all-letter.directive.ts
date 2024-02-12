import { Directive, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][capitalize]',
})
export class CapitalizeAllLetterDirective {
  constructor(@Self() private ngControl: NgControl) {}

  ngOnInit() {
    const control = this.ngControl.control;
    if (control) {
      control.valueChanges.subscribe((value) => {
        if (typeof value === 'string') {
          this.ngControl.control!.setValue(this.capitalizeAllLetters(value), {
            emitEvent: false,
          });
        }
      });
    }
  }

  capitalizeAllLetters(value: string): string {
    if (!value) return value;
    return value.toUpperCase();
  }
}
