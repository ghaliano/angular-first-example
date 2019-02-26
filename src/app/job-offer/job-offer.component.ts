import {Component, OnInit} from '@angular/core';
import {OfferService} from '../service/offer.service';
import {Offer} from '../model/offer.model';

@Component({
    selector: 'app-job-offer',
    templateUrl: './job-offer.component.html',
    styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent implements OnInit {
    offers: Array<Offer> = [];
    offer: Offer = new Offer();

    constructor(
        private offerService: OfferService
    ) {
        this.offerService.getOffers().subscribe((result) => {
            this.offers = result;
        });
        //console.log("constrctor called!");
    }

    ngOnInit() {
    }

    onOfferCreate(offer) {
        this.offerService.create(offer);
        this.initOffer();
    }

    onOfferEdit(offer) {
        this.offerService.edit(offer);
    }

    clearOffers() {
        this.offerService.clearAll();
        this.offers = [];
    }

    initOffer() {
        this.offer.id = null;
        this.offer.name = null;
    }

    deleteOffer(id) {
        this.offerService.delete(id);
    }

    selectOffer(id) {
        console.log(this.offerService.getOfferById(id));
        this.offer =
            this.offerService.getOfferById(id);
    }

}
