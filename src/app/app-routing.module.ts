import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  { path: '', component: CreateUserComponent },
  { path: 'show', component: ShowUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
