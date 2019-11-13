import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {KundenDetailComponent} from './components/kundendetail/kunden-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { KundenlisteComponent } from './components/kundenliste/kundenliste.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
    { path: 'detail/:id', component: KundenDetailComponent },
    { path: 'list', component: KundenlisteComponent },
    { path: 'reports', component: ReportsComponent },
    {
      path: 'home',
      component: AppComponent,
      data: { title: 'Kundenverwaltung' }
    }
];

@NgModule({
  declarations: [AppComponent, KundenDetailComponent, KundenlisteComponent, FooterComponent, ReportsComponent, HeaderComponent],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, HttpClientModule, NgbDatepickerModule, RouterModule.forRoot(
      appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
