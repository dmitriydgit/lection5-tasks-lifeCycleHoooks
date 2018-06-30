import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';

@NgModule({
	declarations: [
		AppComponent,
		ParentComponent,
		Child1Component,
		Child2Component
	],
	imports: [
		BrowserModule,
		FormsModule,
		MatRadioModule,
		BrowserAnimationsModule,
		MatSelectModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
