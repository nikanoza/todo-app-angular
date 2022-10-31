import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  darkMode: boolean = false;
  tasks: Task[] = [];
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.darkMode = this.tasksService.darkMode;
    this.tasks = this.tasksService.tasks;
  }

  changeMode = (): void => {
    this.darkMode = this.tasksService.changeMode();
  };

  addNewTask(task: Task) {
    this.tasks = this.tasksService.addTask(task);
  }

  changeStatus(id: number) {
    this.tasks = this.tasksService.changeStatus(id);
  }
}
