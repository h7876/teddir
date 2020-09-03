import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewLinkComponent } from './new-link/new-link.component';
import { HomeFeedComponent } from './home-feed/home-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLinkComponent,
    HomeFeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
