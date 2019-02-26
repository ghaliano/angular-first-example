import {Injectable} from '@angular/core';
import {Offer} from '../model/offer.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OfferService {
    offers: Array<Offer> = [
        {id: 1, name: 'Dev'},
        {id: 2, name: 'Architecte'},
        {id: 3, name: 'Scrum master'},
        {id: 4, name: 'Designer'},
        {id: 5, name: 'Integrateur'},
    ];

    constructor(private http: HttpClient) {
    }

    getOffers(): Observable<any> {
        return this.http.get('http://127.0.0.1:8000/api/offers.json');
    }

    create(offer: Offer) {
        offer.id = this.offers.length + 1;
        this.offers.push(
            this.cloneOffer(offer)
        );
    }

    delete(offer: Offer) {
        const index = this.getOfferIndexById(offer.id);
        this.offers.splice(index, 1);
    }

    edit(offer: Offer) {
        this.offers[this.getOfferIndexById(offer.id)]
            = this.cloneOffer(offer);
    }

    getOfferById(id) {
        const selectedOffer = this.offers[this.getOfferIndexById(id)];

        return this.cloneOffer(selectedOffer);
    }

    cloneOffer(offer) {
        return Object.assign(
            {}, offer
        );
    }

    clearAll() {
        this.offers = [];
    }

    getOfferIndexById(id) {
        return this.offers.findIndex((offer) => {
            return offer.id == id;
        });
    }
}
