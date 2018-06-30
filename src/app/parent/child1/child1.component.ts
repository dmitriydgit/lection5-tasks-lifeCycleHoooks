import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Colors {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-child1',
	templateUrl: './child1.component.html',
	styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

	@Output() fontEmit = new EventEmitter();
	@Output() colorEmit = new EventEmitter();

	font: string = "";
	color: string = "";

	colors: Colors[] = [
		{ value: 'color-0', viewValue: 'Красный' },
		{ value: 'color-1', viewValue: 'Синий' },
		{ value: 'color-2', viewValue: 'Зеленый' }
	];

	constructor() { }

	ngOnInit() {
	}

	showFont() {
		console.log(this.font)
	}
	setFont(fnt) {
		this.font = fnt;
		this.fontEmit.emit(fnt);
	}

	setColor(clr) {
		//console.log(clr)
		this.color = clr;
		this.colorEmit.emit(clr);
	}

}
