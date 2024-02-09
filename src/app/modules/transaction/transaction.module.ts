import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TableComponent } from '../../shared/components/table/table.component';

@NgModule({
  declarations: [TransactionComponent, AddTransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    TransactionRoutingModule,
    InputTextModule,
    MatInputModule,
    MatFormFieldModule,
    ButtonComponent,
    TableComponent
    //Standalone
  ],
})
export class TransactionModule {}
