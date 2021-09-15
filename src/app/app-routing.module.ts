
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [

{path : "" , component:HomeComponent},
{path : "explore" , component:ExploreComponent},
{path: "news", component : LatestNewsComponent},
{path : "Contact" , component:ContactComponent},
{path: "Work", component :WorksComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


