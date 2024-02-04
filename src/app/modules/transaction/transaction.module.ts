import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction.component';


@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    TransactionRoutingModule,
    InputTextModule,

    // 
    
  ]
})
export class TransactionModule { }
