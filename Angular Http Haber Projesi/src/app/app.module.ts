import { NewsServiceService } from './service/news-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule} from '@angular/common/http';
import { SportsComponent } from './sports/sports.component';
import { TeknolojiComponent } from './teknoloji/teknoloji.component';
import { HealtSaglikComponent } from './healt-saglik/healt-saglik.component';
import { BilimComponent } from './bilim/bilim.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SportsComponent,
    TeknolojiComponent,
    HealtSaglikComponent,
    BilimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
