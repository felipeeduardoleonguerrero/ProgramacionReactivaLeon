import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { delay, filter, from, fromEvent, map, Observable, of, Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {

  students:any;

  subscriptions: Subscription;

  displayedColumns=['student', 'course', 'class', 'edit', 'delete']

  @ViewChild('table') table: MatTable<any>;

  constructor(private router:Router, private studentsService:StudentsService) { }

  ngOnInit(): void {

    this.subscriptions=new Subscription();
    
    //Suscripción a un servicio con observable
    this.subscriptions.add(
      this.studentsService.getStudentsList().subscribe(

        (val)=>this.students=val

      )
    )

    /*this.studentsTwo.pipe(
      filter((char)=>char! == ' '),
      map((char)=>char.toUpperCase())
    )*/
  }

  addStudent(){
    this.router.navigate(["students/add-edit_student"]);
  }

  editStudent(el:any){
    
    //Edición de estudiante
    this.studentsService.studentToEdit=el;
    this.router.navigate(["students/add-edit_student"]);

  }

  deleteStudent(el:any){

    //Eliminación de estudiante
    let index = this.students.findIndex((student: { id: any; })=> student.id===el.id);
    this.students.splice(index,1);
    this.table.renderRows();
    this.studentsService.studentsList=this.students!;
  }

  //delayDatum(val:any): Promise<any>{
  //  return new Promise((resolve,reject)=>{
  //    setTimeout(()=>resolve(val),2000)
  //  })
  //}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
