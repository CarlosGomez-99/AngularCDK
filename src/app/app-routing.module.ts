import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './components/boards/boards.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'boards', component: BoardsComponent },
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: '**', redirectTo: '/login', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
