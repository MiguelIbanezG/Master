import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RoomComponent } from './Components/room/room.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'room/:id', component: RoomComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
