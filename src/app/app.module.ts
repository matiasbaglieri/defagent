import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellModule } from './shell/shell.module';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import {
  HashLocationStrategy,
  Location,
  LocationStrategy
} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    ShellModule,
    SharedModule,
    NgbDropdownModule,
    HomeModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
