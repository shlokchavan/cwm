import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DrawerPanelService } from '../../shared/components/drawer-panel/drawer.service';
import { TransactionConfig } from '../../configs/transaction/transaction.config';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent {
  @ViewChild('drawerTemplate') drawerTemplate!: TemplateRef<any>;

  pageComponentVisibility: any = {
    addTransaction: false,
  };
  data: any[] = [];
  cols: any[] = [];
  tableHeight!: string;

  constructor(private drawerControllerService: DrawerPanelService) {}

  ngOnInit() {
    this.cols = new TransactionConfig().colDefs;

    this.data = [
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
      {
        phone: '8356047973',
        customerName: 'Shlok',
        vehicleNo: 'MH04EQ2282',
        vehicleName: 'Fiesta',
        cash: 0,
        upi: 300,
        creationDate: '2023-02-09'
      },
    ];

    this.tableHeight = 'calc(100vh - 8rem)';
  }

  openDrawer(drawerCase: string) {
    this.drawerControllerService.useCustomTemplate(false); // Disable Custom Template for all the below components
    switch (drawerCase) {
      case 'add-transaction':
        // this.closeAllDrawerComponent(); // Close Other Components before opening this.
        this.pageComponentVisibility.addTransaction = true;
        this.drawerControllerService.createContainer(this.drawerTemplate);
        this.drawerControllerService.toggleDrawer(true);
        this.drawerControllerService.setTitle('Add New Transaction');
        this.drawerControllerService.changeDrawerSize('extra-small');
        break;
    }
  }

  closeAllDrawerComponent() {
    this.drawerControllerService.useCustomTemplate(false); // Disable Custom Template.
    // Loop through all component and hide
    for (const item in this.pageComponentVisibility) {
      this.pageComponentVisibility[item] = false;
    }
  }

  clearDrawerData() {
    this.drawerControllerService.toggleDrawer(false);
    this.drawerControllerService.setTitle(null);
    this.closeAllDrawerComponent();
  }

  drawerAction(event: any) {
    switch (event.event) {
      case 'save-transaction':
        // Save API Call
        // this.saveUser(event.data); // Data == User
        break;
      default:
        this.clearDrawerData();
        break;
    }
  }
}
