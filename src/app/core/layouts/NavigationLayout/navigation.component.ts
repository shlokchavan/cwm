import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterOutlet,
  RouterModule,
} from '@angular/router';
import { DrawerPanelService } from '../../../shared/components/drawer-panel/drawer.service';
import { DrawerPanelCONFIG } from '../../../configs/drawer-config';
import { DrawerPanelComponent } from '../../../shared/components/drawer-panel/drawer-panel.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'navigation-layout',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [Location, DrawerPanelService],
  standalone: true,
  imports: [DrawerPanelComponent, CommonModule, RouterModule, MatToolbarModule],
})
export class NavigationLayoutComponent implements OnInit {
  appName!: string;
  // Template Variable

  // Config Varialbles

  drawerConfig = {
    enableBookmarkSideNav: false,
    enableNav: false,
    enableProfile: false,
  };

  // Variables
  // selectedBookmarks: IRMNavItemConfig[] = [];
  muLOGO!: string;
  drawerWidth!: string;
  userProfile: any;
  drawerPanelConfig = new DrawerPanelCONFIG();
  loading = false;

  constructor(private draweControllerService: DrawerPanelService) {}

  ngOnInit() {
    this.appName = 'Rajput Service Center'
    this.setupDrawerControllers();
  }

  setupDrawerControllers() {
    this.draweControllerService.isActive$.subscribe((response) => {
      this.drawerPanelConfig.isActive = response;
    });
    this.draweControllerService.hasBackdrop$.subscribe(
      (response) => (this.drawerPanelConfig.hasBackdrop = response)
    );
    this.draweControllerService.drawerMode$.subscribe(
      (response) => (this.drawerPanelConfig.drawerMode = response)
    );
    this.draweControllerService.drawerSize$.subscribe(
      (response) => (this.drawerPanelConfig.drawerSize = response)
    );
    this.draweControllerService.drawerContainer$.subscribe(
      (response) => (this.drawerPanelConfig.drawerContainer = response)
    );
    this.draweControllerService.escClose$.subscribe(
      (response) => (this.drawerPanelConfig.escClose = response)
    );
    this.draweControllerService.isRightSide$.subscribe(
      (response) => (this.drawerPanelConfig.isRightSide = response)
    );
    this.draweControllerService.drawerTitle$.subscribe(
      (response) => (this.drawerPanelConfig.drawerTitle = response)
    );
    this.draweControllerService.showCloseButton$.subscribe(
      (response) => (this.drawerPanelConfig.showCloseButton = response)
    );
    this.draweControllerService.useCustomTemplate$.subscribe(
      (response) => (this.drawerPanelConfig.useCustomTemplate = response)
    );
    this.draweControllerService.footerTemplate$.subscribe(
      (response) => (this.drawerPanelConfig.footerTemplate = response)
    );
  }

  drawerActiveChange(isActive: boolean) {
    // This function is used to change active state of drawer on escape
    // Function has been removed from usage, it was creating drawer loop
    // Escape close feature is set has disabled
    this.drawerPanelConfig.isActive = isActive;
    this.draweControllerService.toggleDrawer(isActive);
  }

  //Intialize All Config
}
