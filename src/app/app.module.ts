import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {KundenDetailComponent} from './kunden-detail/kunden-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, KundenDetailComponent],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, HttpClientModule, NgbDatepickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
