import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-taskbar',
	templateUrl: './taskbar.component.html',
	styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {

	startMenuState: boolean = true;
	@Output() messageEvent = new EventEmitter<boolean>();
	constructor() {
	}

	ngOnInit() {
	}

	toggleStartMenu(){
		console.log(this.startMenuState);
		this.startMenuState = !this.startMenuState;
		this.messageEvent.emit(this.startMenuState)
	}
}
