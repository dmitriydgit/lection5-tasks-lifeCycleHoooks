import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-child2',
	templateUrl: './child2.component.html',
	styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
	//@Input('font') font;
	@Input('color') color;

	font: string;
	//color: string;
	msg = "Текст дочернего компонента"

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		this.setColor(changes.color.currentValue);
		console.log(changes.color.currentValue);
		console.log(changes.color.previousValue);
		//console.log("Hook child: Properties were changed!!")
		// for (let key in changes) {
		// 	console.log(`ключ = ${key}`)
		// 	console.log(changes[key].currentValue)
		// 	// 	console.log(`               текущее значение = `)
		// 	// 	console.log(`               предидущее значение = `)
		// 	// 	console.log(changes[key].previousValue)
		// }

	}

	setFont(fnt) {
		this.font = fnt;
	}

	setColor(clr) {
		//console.log(clr);
		this.color = clr;
	}
}

