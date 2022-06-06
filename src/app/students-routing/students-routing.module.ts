import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { StudentListComponent } from '../sidenav/student-list/student-list.component';
import { StudentsFormComponent } from '../sidenav/students-form/students-form.component';

const routes: Routes = [
  {path:'students', component:SidenavComponent, children:[
    {path:'list', component:StudentListComponent},
    {path:'add-edit_student', component:StudentsFormComponent}
]},
  {path: '', redirectTo: '/students/list', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentsRoutingModule { }
