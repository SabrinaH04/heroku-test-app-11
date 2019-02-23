import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPictureComponent } from './components/test-picture/test-picture.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'test', component: TestPictureComponent },
  {path:'**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
