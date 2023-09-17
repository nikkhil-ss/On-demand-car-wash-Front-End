import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingsComponent } from './ratings/ratings.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  { path: 'ratings', component: RatingsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
