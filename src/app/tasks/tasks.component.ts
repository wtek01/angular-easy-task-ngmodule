import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() selectedUserName!: string;
  @Input() selectedUserId!: string;
  isAddingTask: boolean = false;

  constructor(private taskService: TasksService) {}

  getTasksForUser() {
    // sort by completed then due date
    return this.taskService.getUserTasks(this.selectedUserId).sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      if (a.dueDate !== b.dueDate) return a.dueDate > b.dueDate ? -1 : 1;
      return 0;
    });
  }

  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
