import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './components/boards/boards.component';
import { BoardComponent } from './pages/board/board/board.component';
import { ScrollComponent } from './pages/scroll/scroll.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'boards', component: BoardsComponent },
  { path: 'board', component: BoardComponent },
  { path: 'scroll', component: ScrollComponent },
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: '**', redirectTo: '/login', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
