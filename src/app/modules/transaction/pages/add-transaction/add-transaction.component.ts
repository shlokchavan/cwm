import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Transaction } from '../../../../shared/models/transaction.model';
import * as moment from 'moment';

@Component({
  selector: 'add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss',
})
export class AddTransactionComponent {
  phone = '';
  customer_name = '';
  vehicle_no = '';
  vehicle_name = '';
  cash = 0;
  upi = 0;
  transaction: Transaction = new Transaction();
  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();
  firestore = inject(Firestore);

  actionEvent(actionCase?: any, data?: any) {
    const eventAction = {
      data: data, // Route Data or Org Details
      // || this.userDetails
      event: actionCase,
    };

    switch (actionCase) {
      case 'save':
        this.addTransaction(eventAction);
        break;

      default:
        this.onBtnClick.emit(eventAction);
        break;
    }
  }

  async addTransaction(e: any) {
    if (this.transaction.cash || this.transaction.upi) {
      this.transaction.created_at = moment.now();
      // console.log(this.transaction);

      const docRef = await addDoc(collection(this.firestore, 'transaction'), {
        ...this.transaction,
      });
      // console.log(docRef);
      this.onBtnClick.emit(e);
    }
  }
}
