import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  @Input() tasks!: { name: string; check: boolean; }[];
  tableIptValue!: string;
  taskIndex!: number;
  isSave = false;

  constructor() { }
  ngOnInit(): void { }

  changeCheckBox(index: number): void { this.tasks[index].check = !this.tasks[index].check }

  editTask(index: number): void {
    this.tableIptValue = this.tasks[index].name;
    this.taskIndex = index;
    this.isSave = true;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    if (this.isSave) this.isSave = false;
  }

  saveTask(input: HTMLInputElement): void {
    if (this.tableIptValue === '') { input.placeholder = 'Please write text...' } else {
      this.tasks[this.taskIndex].name = this.tableIptValue;
      this.isSave = false;
    }
  }
}
