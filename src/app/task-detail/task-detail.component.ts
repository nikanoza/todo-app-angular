import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() {}

  ngOnInit(): void {}
}
