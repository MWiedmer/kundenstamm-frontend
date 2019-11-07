import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { KundenDetailComponent } from './kunden-detail/kunden-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    KundenDetailComponent
  ], imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, MatSliderModule, MatFormFieldModule, MatInputModule, MatListModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
