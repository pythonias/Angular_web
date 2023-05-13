import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateuserComponent } from './createuser/createuser.component';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';



const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: 'createuser', component: CreateuserComponent },
  { path: 'edituser/:id', component: CreateuserComponent },
];



@NgModule({
  declarations: [
    CreateuserComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
