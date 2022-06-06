import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  
  //Arreglo con todos los estudiantes
  studentsList:any=[
    {
      id: 1,
      studentName:"Felipe",
      studentSurname: "León",
      course: "Angular",
      class: "Primera"
    },
    {
      id: 2,
      studentName:"Michelle",
      studentSurname: "Deschamps",
      course: "Javascript",
      class: "Primera"
    },
    {
      id: 3,
      studentName:"Lorelei",
      studentSurname: "Blaustein",
      course: "Javascript",
      class: "Primera"
    },
    {
      id: 4,
      studentName:"Sergei",
      studentSurname: "Romanov",
      course: "PHP",
      class: "Introducción"
    }
  ];
  
  //Recibe un objeto sin arreglo
  studentToEdit:any;

  constructor() {}

  //Uso de Observable

  getStudentsList():Observable<any> {

    return of(this.studentsList);

  }

  //Uso de Observable

  getStudentToEdit():Observable<any> {

    return of(this.studentToEdit);

  }

}
