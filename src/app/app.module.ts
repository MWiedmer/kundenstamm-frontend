    import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {KundenDetailComponent} from './kunden-detail/kunden-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { KundenlisteComponent } from './kundenliste/kundenliste.component';

const appRoutes: Routes = [
    { path: 'detail/:id', component: KundenDetailComponent },
    { path: 'list', component: KundenlisteComponent },
    {
      path: 'home',
      component: AppComponent,
      data: { title: 'Kundenverwaltung' }
    }
];

@NgModule({
  declarations: [AppComponent, KundenDetailComponent, KundenlisteComponent],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, HttpClientModule, NgbDatepickerModule, RouterModule.forRoot(
      appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
