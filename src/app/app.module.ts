import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {KundenDetailComponent} from './kunden-detail/kunden-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, KundenDetailComponent],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, MatSliderModule, MatFormFieldModule, MatInputModule, MatListModule, MatTableModule, HttpClientModule, MatCardModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
