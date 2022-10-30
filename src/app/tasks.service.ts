import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];
  darkMode: boolean = false;

  addTask(task: Task) {
    this.tasks.push(task);
    return this.tasks;
  }

  changeMode() {
    this.darkMode = !this.darkMode;
    return this.darkMode;
  }
}
