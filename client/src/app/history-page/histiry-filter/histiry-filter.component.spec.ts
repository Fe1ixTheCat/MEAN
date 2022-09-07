import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistiryFilterComponent } from './histiry-filter.component';

describe('HistiryFilterComponent', () => {
  let component: HistiryFilterComponent;
  let fixture: ComponentFixture<HistiryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistiryFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistiryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
