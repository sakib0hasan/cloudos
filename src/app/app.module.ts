import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TaskbarComponent} from './platform/taskbar/taskbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DesktopComponent } from './platform/desktop/desktop.component';
import { StartMenuComponent } from './platform/start-menu/start-menu.component';

@NgModule({
	declarations: [
		AppComponent,
		TaskbarComponent,
		DesktopComponent,
		StartMenuComponent
	],
	imports: [
		BrowserModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
