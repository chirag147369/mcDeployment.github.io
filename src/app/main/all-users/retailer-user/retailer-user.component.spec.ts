import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerUserComponent } from './retailer-user.component';

describe('RetailerUserComponent', () => {
  let component: RetailerUserComponent;
  let fixture: ComponentFixture<RetailerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
