import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { RedirectComponent } from './redirect/redirect.component';
import { PopupComponent } from './popup/popup.component';
import { OptionsComponent } from './options/options.component';
import { BackgroundComponent } from './background/background.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    RedirectComponent,
    PopupComponent,
    OptionsComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
