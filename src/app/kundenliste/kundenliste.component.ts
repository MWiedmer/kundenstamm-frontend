import { Component, OnInit } from '@angular/core';
import {Kunde} from '../kunde';
import {Router} from '@angular/router';
import {KundenstammApiService} from '../kundenstamm-api.service';
import {NgForm} from '@angular/forms';
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-kundenliste',
  templateUrl: './kundenliste.component.html',
  styleUrls: ['./kundenliste.component.scss']
})

export class KundenlisteComponent implements OnInit {

  constructor(public kundenstammApiService: KundenstammApiService, public router: Router) {

  }

  title = 'kundenstamm-frontend';
  showForm = false;

  displayedColumns: string[] = ['id', 'name', 'vorname', 'geburtsdatum'];

  kundenliste: Kunde[];

  selectedKunde: Kunde;
  newCustomer: Kunde = new Kunde();
  newCustomerGeburtstag: NgbDate;


  ngOnInit() {
    this.loadCustomers();
this.selectedKunde = new Kunde();
this.selectedKunde.customerNr = 1;
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
      console.log(this.newCustomer);
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