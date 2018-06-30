import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

	font: string = "";
	color: string = "";


	@ViewChild(Child2Component)
	private child2Modification: Child2Component;

	constructor() { }


	ngOnInit() {
		this.child2Modification.setFont(this.font);
	}

	setFont(eventValue) {
		console.log(eventValue)
		this.font = eventValue;
		this.child2Modification.setFont(this.font);

	}

	setColor(eventValue) {
		console.log(eventValue)
		this.color = eventValue;
		//this.child2Modification.setColor(this.color);

	}

}
