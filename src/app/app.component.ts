import {Component} from '@angular/core';
import {Kunde} from './kunde';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kundenstamm-frontend';
  name = 'default value';
  vorname = 'default vorname';
  geburtsdatum = '01.01.1979';

  displayedColumns: string[] = ['id', 'name', 'vorname', 'geburtsdatum'];

  kunden: Kunde[] = [
    {id: 1, name: 'Wiedmer', vorname: 'Markus', geburtsdatum: '04.07.1977'},
    {id: 2, name: 'Foo', vorname: 'Bar', geburtsdatum: '01.01.1970'}];

  selectedKunde: Kunde;

  onSelect(kunde: Kunde): void {
    this.selectedKunde = kunde;
  }
}
