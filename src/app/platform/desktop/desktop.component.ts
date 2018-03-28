import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-desktop',
	templateUrl: './desktop.component.html',
	styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

	startMenuState: boolean = true;

	constructor() {
	}

	ngOnInit() {
	}

	receiveMessage($event) {
		this.startMenuState = $event;
	}

}
