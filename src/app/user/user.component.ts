import {
  Component,
  computed,
  input,
  Input,
  Output,
  output,
  signal,
  EventEmitter,
} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() selectedUser = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onClickedUser() {
    this.selectedUser.emit(this.user.id);
  }
}
