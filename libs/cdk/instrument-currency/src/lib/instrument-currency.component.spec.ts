import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentCurrencyComponent } from './instrument-currency.component';

describe('InstrumentCurrencyComponent', () => {
  let component: InstrumentCurrencyComponent;
  let fixture: ComponentFixture<InstrumentCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
