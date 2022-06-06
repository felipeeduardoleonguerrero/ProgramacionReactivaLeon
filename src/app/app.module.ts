import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { StudentsRoutingModule } from './students-routing/students-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { StudentsFormComponent } from './sidenav/students-form/students-form.component';

const appRoutes=[
  {path: 'students', loadChildren: ()=>import('./sidenav/sidenav.module').then(m=>m.StudentsModule) },
  {path: '', redirectTo:'/students', pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    StudentsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StudentsRoutingModule,
    CommonModule,
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
