import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { DrawerPanelService } from '../../shared/components/drawer-panel/drawer.service';
import { TransactionConfig } from '../../configs/transaction/transaction.config';
import { TransactionService } from '../../shared/services/transaction.service';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent {
  // Variables
  @ViewChild('drawerTemplate') drawerTemplate!: TemplateRef<any>;

  pageComponentVisibility: any = {
    addTransaction: false,
  };
  data: any[] = [];
  cols: any[] = [];
  tableHeight!: string;
  firestore = inject(Firestore);
  totalSales: number = 0;

  constructor(
    private drawerControllerService: DrawerPanelService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.cols = new TransactionConfig().colDefs;
    this.tableHeight = 'calc(100vh - 8rem)';
    this.getAllTransactions();
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
    this.clearDrawerData();
    switch (event.event) {
      case 'save':
        // Save API Call
        // this.saveUser(event.data); // Data == User
        this.getAllTransactions();
        break;
      default:
        this.clearDrawerData();
        break;
    }
  }

  async getAllTransactions() {
    // MONGO
    // this.transactionService.getAllTransactions().subscribe((res: any) => {
    //   console.log(res);
    // });
    const querySnapshot = await getDocs(
      collection(this.firestore, 'transaction')
    );

    this.data = querySnapshot.docs.map((doc) => doc.data());
    this.totalSales = this.data
      .map((row: any) => Number(row['cash'] || 0) + Number(row['upi'] || 0))
      .reduce((acc: number, currentValue: number) => acc + currentValue, 0);
  }
}
