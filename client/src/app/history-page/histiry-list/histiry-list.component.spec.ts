import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistiryListComponent } from './histiry-list.component';

describe('HistiryListComponent', () => {
  let component: HistiryListComponent;
  let fixture: ComponentFixture<HistiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistiryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
