import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent }        from './home.component';
import { InterestsComponent }   from './interests.component';
import { PortfolioComponent }   from './portfolio.component';

import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { PersonService }    from './services/person.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    InterestsComponent,
    PortfolioComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [PersonService]
})
export class AppModule { }
