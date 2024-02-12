import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstLetterDirective } from '../directives/capitalize-first-letter.directive';
import { CapitalizeAllLetterDirective } from '../directives/capitalize-all-letter.directive';

@NgModule({
  declarations: [CapitalizeFirstLetterDirective, CapitalizeAllLetterDirective],
  imports: [CommonModule],
  exports: [CapitalizeFirstLetterDirective, CapitalizeAllLetterDirective],
})
export class SharedModule {}
