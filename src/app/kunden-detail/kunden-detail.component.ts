import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {KundenstammApiService} from '../kundenstamm-api.service';
import {Kunde} from '../kunde';

@Component({
  selector: 'app-kunden-detail',
  templateUrl: './kunden-detail.component.html',
  styleUrls: ['./kunden-detail.component.scss']
})
export class KundenDetailComponent implements OnInit {

id: any;
selectedKunde: Kunde;

  constructor(private _Activatedroute:ActivatedRoute, public kundenstammApiService: KundenstammApiService) { }

  ngOnInit() {
        this.id=this._Activatedroute.snapshot.paramMap.get("id");
        this.loadCustomer();
  }

loadCustomer() {
    this.kundenstammApiService.getCustomer(this.id).subscribe(response => {
          console.log(response);
          this.selectedKunde = response;
          console.log(this.selectedKunde.name);
   
        });
  }

}
