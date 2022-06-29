import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiComponent } from './lei.component';

describe('LeiComponent', () => {
  let component: LeiComponent;
  let fixture: ComponentFixture<LeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
