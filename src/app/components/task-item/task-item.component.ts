import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() taskData:Task;
@Output() deleted:EventEmitter<Task> = new EventEmitter()
@Output() onToggleReminder: EventEmitter<any> = new EventEmitter()
faTimes =faTimes
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    this.deleted.emit(task)
  }
  ontoggle(task:Task){
    this.onToggleReminder.emit(task)
  }
}
