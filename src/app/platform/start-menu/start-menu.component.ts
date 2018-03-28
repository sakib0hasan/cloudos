import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-start-menu',
	templateUrl: './start-menu.component.html',
	styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {

	@Input() isStartMenuOpen: boolean = true;

	menuItems: any[] = [
		{
			"name": "Start screen",
			"icon": ""
		},
		{
			"name": "Google Chrome",
			"icon": ""
		},
		{
			"name": "Steam",
			"icon": ""
		},
		{
			"name": "TeamSpeak 3 Client",
			"icon": ""
		},
		{
			"name": "AVer MediaCenter 3D",
			"icon": ""
		},
		{
			"name": "Snipping Tool",
			"icon": ""
		},
		{
			"name": "CCleaner",
			"icon": ""
		}
	];

	constructor() {

	}

	ngOnInit() {
		console.log(this.isStartMenuOpen);
	}

}
