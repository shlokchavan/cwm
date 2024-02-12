export class TransactionConfig {
  colDefs = [
    {
      field: 'phone',
      header: 'Phone',
    },
    {
      field: 'customer_name',
      header: 'Customer Name',
    },
    {
      field: 'vehicle_no',
      header: 'Vehicle No.',
    },
    {
      field: 'vehicle_name',
      header: 'Vehicle Name',
    },
    {
      field: 'cash',
      header: 'Cash',
      type: 'amount',
    },
    {
      field: 'upi',
      header: 'UPI',
      type: 'amount',
    },
    {
      field: 'created_at',
      header: 'Date',
      type: 'datetime',
    },
  ];
}
