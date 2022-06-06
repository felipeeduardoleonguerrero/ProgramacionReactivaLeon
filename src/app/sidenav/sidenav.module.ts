import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material.module';
import { NamesPipe } from '../names.pipe';
import { StudentsRoutingModule } from '../students-routing/students-routing.module';
import { SidenavComponent } from './sidenav.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TitleSizeDirective } from './student-list/title-size.directive';
import { TitleSizeTwoDirective } from './students-form/title-size-two.directive';


@NgModule({
  declarations: [
    SidenavComponent,
    StudentListComponent,
    NamesPipe,
    TitleSizeDirective,
    TitleSizeTwoDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StudentsRoutingModule,
    MaterialModule,
  ],
  providers: []
})
export class StudentsModule { }