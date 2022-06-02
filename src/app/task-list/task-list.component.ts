import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  user = { firstName: 'Ivan', lastName: 'Ivanov' };
  userTasks: Array<object> = [
    { task: 'HTML', check: true, status: 'Done' },
    { task: 'CSS3', check: true, status: 'Done' },
    { task: 'SCSS', check: false, status: 'In PROGRESS' }
  ];

  constructor() { }
  ngOnInit(): void { }
}
