import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    constructor() {
    }

    calculate(operation) {
        //let expression = "alert("+operation+");";
        //alert(expression);
        return Function('return ' + operation + ';')();
    }
}



