import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TheHeaderComponent } from './the-header/the-header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [AppComponent, TheHeaderComponent, NewTaskComponent, TaskDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
