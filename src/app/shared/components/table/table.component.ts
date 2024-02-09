import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'table',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() cols: any[] = [];
  @Input() rows: any[] = [];
  @Input() height!: string;
}
