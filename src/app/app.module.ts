import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OfferService } from './service/offer.service';
import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { FormsModule } from '@angular/forms';
import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JobOfferComponent,
     OfferEditComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
