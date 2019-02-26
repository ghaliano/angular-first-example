import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from '../model/offer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferService} from '../service/offer.service';

@Component({
    selector: 'app-offer-edit',
    templateUrl: './offer-edit.component.html',
    styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {
    offer: Offer = new Offer();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private offerService: OfferService
    ) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.offer = this.offerService.getOfferById(id);
    }

    processOffer() {
        if (!this.offer.id) {
            this.offerService.create(
                Object.assign({}, this.offer)
            );
        } else {
            //modification
            this.offerService.edit(this.offer);

        }
        this.router.navigate(['/offers']);

    }
}
