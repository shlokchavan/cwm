export class Transaction {
  id?: string;
  phone!: string;
  customer_name!: string;
  vehicle_no!: string;
  vehicle_name!: string;
  cash!: number;
  upi!: number;
  created_at?: Date | any;
}
