import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  },
  {
    path: 'user1',
    loadChildren: () =>
      import('./user1/user1.module').then((n) => n.User1Module),
  },
  {
    path: 'user2',
    loadChildren: () =>
      import('./user2/user2.module').then((n) => n.User2Module),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
