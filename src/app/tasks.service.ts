import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];
  darkMode: boolean = false;
  filterBy: string = 'All';

  getTasks() {
    const actives = this.tasks.filter((task) => task.active);
    const completed = this.tasks.filter((task) => !task.active);
    return this.filterBy === 'active'
      ? actives
      : this.filterBy === 'completed'
      ? completed
      : this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    return this.getTasks();
  }

  changeMode() {
    this.darkMode = !this.darkMode;
    return this.darkMode;
  }

  changeStatus(id: number) {
    const taskClone = this.tasks.slice();
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    taskClone[taskIndex].active = !taskClone[taskIndex].active;
    return this.getTasks();
  }

  deleteTask(id: number) {
    const taskClone = this.tasks.slice();
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    taskClone.splice(taskIndex, 1);
    this.tasks = taskClone;
    console.log(this.getTasks());
    return this.getTasks();
  }

  changeFilter(filter: string) {
    this.filterBy = filter;
    console.log(this.getTasks());
    return this.getTasks();
  }

  removeCompleted() {
    const tasksClone = this.tasks.slice();
    const result = tasksClone.filter((task) => task.active);
    this.tasks = result;
    return this.getTasks();
  }
}
