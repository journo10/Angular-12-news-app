import { BilimComponent } from './bilim/bilim.component';
import { HealtSaglikComponent } from './healt-saglik/healt-saglik.component';
import { SportsComponent } from './sports/sports.component';
import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeknolojiComponent } from './teknoloji/teknoloji.component';

const routes: Routes = [
  {path:'',component:NewsComponent},
  {path: 'anasayfa', component:NewsComponent},
  {path: 'spor',component:SportsComponent},
  {path: 'teknoloji',component:TeknolojiComponent},
  {path: 'genel',component:HealtSaglikComponent},
  {path: 'bilim',component:BilimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
