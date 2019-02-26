import {Component, OnInit} from '@angular/core';
import {CalculatorService} from '../calculator.service';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css'],
    animations: [
        trigger('openClose', [
            // ...
            state('open', style({
                height: '200px',
                opacity: 1
            })),
            state('closed', style({
                height: '0px',
                opacity: 0
            })),
            transition('open => closed', [
                animate('1s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ]),
        ]),
    ]
})
export class CalculatorComponent implements OnInit {
    keys: Array<string> = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    scientificKeys: Array<string> = [
        'Math.cos','Math.sin','Math.abs','Math.pow',
        'Math.log','Math.exp','Math.sqrt',
    ];
    operators: Array<string> = ['+', '-', '*', '/', '(', ')'];
    operation: string = '';
    result: string = '';
    memory: string = '';
    msg: string = '';
    isScientificDisplayed: boolean = false;

    constructor(private calculatorService: CalculatorService) {
    }

    ngOnInit() {


    }

    built(term) {
        this.operation += term;
        console.log(this.operation);
    }

    calculate() {
        try {
            this.result =
                this.calculatorService.calculate(this.operation);
            this.operation = this.result.toString();
            this.msg = '';
        } catch (e) {
            this.msg = 'verifier le syntaxe';
        }

    }
    isExpressionValide(){
        try {
                this.calculatorService.calculate(this.operation);
            return true;
        } catch (e) {
            return false;
        }
    }

    memorySave() {
        this.memory = this.result;
    }

    memoryApply() {
        this.built(this.memory);
    }

    memoryClear() {
        this.memory = '';
    }

    back() {
        this.operation = this.operation.slice(0, -1);
        // this.operation.slice(0,-1);
    }
    clear(){
        this.operation='';
    }
    toggleScientific() {
        this.isScientificDisplayed = !this.isScientificDisplayed;
    }
}
