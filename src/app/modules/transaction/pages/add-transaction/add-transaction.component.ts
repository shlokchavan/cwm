import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss',
})
export class AddTransactionComponent {
  number = '';
  customerName = '';
  vehicleNo = '';
  vehicleName = '';
  cash = 0;
  upi = 0;
  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();

  actionEvent(actionCase?: any, data?: any) {
    const eventAction = {
      data: data, // Route Data or Org Details
      // || this.userDetails
      event: actionCase,
    };
    this.onBtnClick.emit(eventAction);
  }
}
