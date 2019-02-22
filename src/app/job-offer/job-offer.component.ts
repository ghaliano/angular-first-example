import {Component, OnInit} from '@angular/core';

import { Offer } from '../model/offer.model';

@Component({
    selector: 'app-job-offer',
    templateUrl: './job-offer.component.html',
    styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent implements OnInit {
    offers: Array<Offer> = [];
    offer: Offer = new Offer() ;

    constructor() {
        //console.log("constrctor called!");
    }

    ngOnInit() {
    }

    processOffer() {
        if (!this.offer.id){
            this.offer.id = this.offers.length + 1;
            this.offers.push(
                Object.assign({}, this.offer)
            );
            this.initOffer();
        } else {
            this.offers[this.getOfferIndexById(this.offer.id)]
 = this.offer;        }
    }

    clearOffers() {
        this.offers = [];
    }

    initOffer() {
        this.offer.id = null;
        this.offer.name = null;
    }

    deleteOffer(id) {
        const index = this.getOfferIndexById(id);

        this.offers.splice(index, 1);
    }

    selectOffer(id) {
        this.offer = Object.assign({}, this.offers[this.getOfferIndexById(id)]);
    }

    getOfferIndexById(id){
        return this.offers.findIndex((offer) => {
            return offer.id == id;
        });
    }
}
