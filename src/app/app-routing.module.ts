import {BlogComponent} from "./blog/blog.component";
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
