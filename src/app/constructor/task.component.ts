import { Component, OnInit } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  public todoList: Array<Task> = []
  constructor() { }

  add(todo) {
    const name = todo.value;
    if (!name) {
      return;
    }
    const task: Task = new Task(name);
    this.todoList.push(task);
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.todoList));
  }

  ngOnInit() {
  }

}
