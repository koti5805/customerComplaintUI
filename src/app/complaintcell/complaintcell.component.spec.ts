import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintcellComponent } from './complaintcell.component';

describe('ComplaintcellComponent', () => {
  let component: ComplaintcellComponent;
  let fixture: ComponentFixture<ComplaintcellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintcellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
