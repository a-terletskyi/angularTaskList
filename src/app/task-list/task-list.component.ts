import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {
  inputValue = '';
  user = { firstName: 'Ivan', lastName: 'Ivanov' };
  userTasks: { name: string; check: boolean; }[] = [
    { name: 'HTML', check: true },
    { name: 'CSS3', check: true },
    { name: 'SCSS', check: false },
    { name: 'JavaScript', check: false },
    { name: 'JQuery', check: false },
    { name: 'Angular', check: false },
    { name: 'Bootstrap', check: false },
  ];

  constructor() { }
  ngOnInit(): void { }

  addTask(input: HTMLInputElement): void {
    if (this.inputValue === '') { input.placeholder = 'Please write text...' } else {
      this.userTasks.push({ name: this.inputValue, check: false });
      this.inputValue = '';
      input.placeholder = '';
    }
  }

}