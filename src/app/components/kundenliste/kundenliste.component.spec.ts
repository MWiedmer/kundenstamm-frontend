import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenlisteComponent } from './kundenliste.component';

describe('KundenlisteComponent', () => {
  let component: KundenlisteComponent;
  let fixture: ComponentFixture<KundenlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundenlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KundenlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
