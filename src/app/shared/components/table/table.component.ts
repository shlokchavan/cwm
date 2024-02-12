import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { dateTimeFormatter } from '../../utils/date/datetime-formatter';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'table',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule, MatInputModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @ViewChild('dt') dt!: Table;
  @Input() cols: any[] = [];
  @Input() rows: any[] = [];
  @Input() height!: string;
  @Input() filterFields!: any[];
  @Input() gridHeader!: TemplateRef<any>;

  convertDateTime(val: any) {
    return dateTimeFormatter(val);
  }

  filterTable(event: any) {
    return this.dt.filterGlobal(event.target.value, 'contains');
  }
}
