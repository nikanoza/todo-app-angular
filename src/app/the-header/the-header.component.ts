import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css'],
})
export class TheHeaderComponent implements OnInit {
  @Input() changeModeHandler: () => void;
  darkMode: boolean = false;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  changeHandler() {
    this.changeModeHandler();
    this.darkMode = this.taskService.darkMode;
  }
}
