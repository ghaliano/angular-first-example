import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {OfferEditComponent} from './offer-edit/offer-edit.component';
import {JobOfferComponent} from './job-offer/job-offer.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'offers', component: JobOfferComponent},
  {path: 'offers/edit/:id', component: OfferEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
