import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackgroundComponent } from './background/background.component';
import { PopupComponent } from './popup/popup.component';
import { OptionsComponent } from './options/options.component';
import { RedirectComponent } from './redirect/redirect.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'index.html', component: RedirectComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'background', component: BackgroundComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
