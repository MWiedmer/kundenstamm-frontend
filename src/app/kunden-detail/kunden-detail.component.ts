import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {KundenstammApiService} from '../kundenstamm-api.service';
import {Kunde} from '../kunde';
import {Policy} from '../model/Policy';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-kunden-detail',
    templateUrl: './kunden-detail.component.html',
    styleUrls: ['./kunden-detail.component.scss']
})
export class KundenDetailComponent implements OnInit {

    id: any;
    selectedKunde: Kunde;
    policies$: Observable<Policy[]> = new Observable();

    constructor(private _Activatedroute: ActivatedRoute, public kundenstammApiService: KundenstammApiService) {}

    ngOnInit() {
        this.id = this._Activatedroute.snapshot.paramMap.get("id");
        this.loadCustomer();
        this.loadPolicies();
    }

    loadCustomer() {
        this.kundenstammApiService.getCustomer(this.id).subscribe(response => {
            console.log(response);
            this.selectedKunde = response;
        });
    }

    loadPolicies() {
        this.policies$ = this.kundenstammApiService.getPoliciesForCustomer(this.id); 
        console.log("Policies loaded: " + this.policies$);           
    }

}
