import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BloggComponent } from './views/blogg/blogg.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NewpostComponent } from './views/newpost/newpost.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: "blogg/:id",
    component: BloggComponent
  },
  {
    path: "newPost",
    component: NewpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
