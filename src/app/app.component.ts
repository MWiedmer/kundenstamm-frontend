import {Component, OnInit} from '@angular/core';
import {Kunde} from './kunde';
import {Router} from '@angular/router';
import {KundenstammApiService} from './kundenstamm-api.service';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public kundenstammApiService: KundenstammApiService, public router: Router) {

  }

  title = 'kundenstamm-frontend';
  showForm = false;

  displayedColumns: string[] = ['id', 'name', 'vorname', 'geburtsdatum'];

  kunden: Kunde[] = [{customerNr: 1, name: 'Wiedmer', vorname: 'Markus', geburtsdatum: '04.07.1977'},
    {customerNr: 2, name: 'Foo', vorname: 'Bar', geburtsdatum: '01.01.1970'}];

  kundenliste: Kunde[];

  selectedKunde: Kunde;
  newCustomer: Kunde = new Kunde();

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.kundenstammApiService.getAllCustomers().subscribe(response => {
          console.log(response);
          this.kundenliste = response;
        });
  }

  onSelect(kunde: Kunde): void {
    this.selectedKunde = kunde;
  }

  enableForm(): void {
    console.log('enable form');
    this.showForm = true;
    this.newCustomer = new Kunde();
  }

  addCustomer(myForm: NgForm) {
    console.log('form submitted');
    if (myForm.valid) {
      this.kundenstammApiService.createItem(this.newCustomer).subscribe((response) => {
        this.loadCustomers();
        this.showForm = false;
      });
    }
  }

  clearForm() {
    console.log('abbrechen');
    this.showForm = false;
    this.newCustomer = new Kunde();
  }
}
