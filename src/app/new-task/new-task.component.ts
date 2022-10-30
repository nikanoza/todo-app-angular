import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  @Input() darkMode: boolean;
  @Input() tasks: Task[];
  @Output() newTaskEvent = new EventEmitter<Task>();

  active: boolean = true;
  text: string = '';

  constructor() {}

  ngOnInit(): void {}

  changeStatus() {
    this.active = !this.active;
  }

  addTask(event: KeyboardEvent): void {
    const newTask = {
      id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id : 1,
      text: this.text,
      active: this.active,
    };
    if (event.key === 'Enter' && this.text.length > 3) {
      this.newTaskEvent.emit(newTask);
      this.active = true;
      this.text = '';
    }
  }
}
