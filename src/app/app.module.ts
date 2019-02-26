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
import { CalculatorComponent } from './calculator/calculator.component';
import {CalculatorService} from './calculator.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    JobOfferComponent,
     OfferEditComponent,
     CalculatorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [OfferService,CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
