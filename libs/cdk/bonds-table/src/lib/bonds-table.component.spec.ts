import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsTableComponent } from './bonds-table.component';

describe('BondsTableComponent', () => {
  let component: BondsTableComponent;
  let fixture: ComponentFixture<BondsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
