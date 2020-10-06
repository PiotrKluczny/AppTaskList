import { Component, LOCALE_ID, Inject } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Task } from './task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskName = 'Nowe zadań';
  taskDate = '';
  editMode = false;

config: {[key: string]: string} = null;

tasks: Task[] = [
  {
    name: 'Sprzątanie',
    deadline: new Date().toDateString(),
    done: false,
  },
  {
    name: 'Mycie',
    deadline: new Date().toDateString(),
    done: false,
  },
  {
    name: 'Pranie',
    deadline: new Date().toDateString(),
    done: true,
  },
  {
    name: 'Odkurzanie',
    deadline: new Date().toDateString(),
    done: false,
  }
];

constructor(){

setTimeout( () => {
  this.config = {
    title: 'Lista zadań',
    footer: '© Lista zadań z obiektu config',
    date: new Date().toDateString(),
  };
}, 500 )
this.sortTask();
;}

clearTasks(){
  this.tasks = [];
}

createTask( ){
  const task: Task = {
    name: this.taskName,
    deadline: this.taskDate,
    done: false,
  };
  this.tasks.push(task);

  this.taskName = '';
  this.taskDate = '';
  this.sortTask();
}

switchEditMode(){
this.editMode = !this.editMode;
}

markTaskDone(task: Task){
  task.done = true;
  this.sortTask();
}

deleteTask(task: Task){
  this.tasks = this.tasks.filter(e =>e !=task);
  this.sortTask();
}

private sortTask(){
  this.tasks = this.tasks.sort((a: Task, b: Task) =>
  a.done === b.done ? 0 : a.done ? 1 : -1);
}

}




  // getfooter(): string {
  //   return '© Lista zadań, All rights reserved';
  // }

  // getdate(): Date {
  //   return new Date();
  // }

  // constructor(@Inject(LOCALE_ID) private localId: string) {
  //   console.log('Localization:', this.localId);
  // }
// }
