import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
    compteurEnabled: boolean = true;
    compteur: number = 0;

    constructor() {
        setInterval(
            () => {
                this.executeClick();
            },
            100
        );
    }

    ngOnInit() {
    }

    executeClick() {
        if (this.compteurEnabled) {
            this.compteur++;
        }
    }

    stopClick() {
        this.compteurEnabled = false;
    }

    restartClick() {
        this.compteurEnabled = true;
    }

    initClick() {
        this.compteur = 0;
        this.compteurEnabled= true;
    }

}
