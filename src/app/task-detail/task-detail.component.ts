import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() darkMode: boolean;
  @Output() changeStatusEvent = new EventEmitter<number>();
  @Output() removeTaskEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeStatus(id: number) {
    this.changeStatusEvent.emit(id);
  }

  removeTask(id: number) {
    this.removeTaskEvent.emit(id);
  }
}
