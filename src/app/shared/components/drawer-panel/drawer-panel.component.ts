import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'drawer-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSidenavModule],
  templateUrl: './drawer-panel.component.html',
  styleUrl: './drawer-panel.component.scss',
})
export class DrawerPanelComponent {
  @Input()
  hasBackdrop!: boolean;
  @Input()
  drawerMode!: 'side' | 'over' | 'push';
  @Input() drawerSize!:
    | 'extra-extra-small'
    | 'extra-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large';
  @Input() escClose!: boolean;
  @Input() isRightSide!: boolean;
  @Input() isActive!: boolean;
  @Input() drawerTitle!: string;
  @Input() showCloseButton!: boolean;
  @Input() drawerContainer!: TemplateRef<any>;
  @Input() footerTemplate!: TemplateRef<any>;
  @Input() useCustomTemplate!: boolean;
  @Output() isActiveChange: EventEmitter<any> = new EventEmitter();

  onDrawerToggle(isActive: any) {}
}
