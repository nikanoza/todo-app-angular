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

  changeStatus(id: number) {
    const taskClone = this.tasks.slice();
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    taskClone[taskIndex].active = !taskClone[taskIndex].active;
    this.tasks = taskClone;
    return this.tasks;
  }
}
