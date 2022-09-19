import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBillComponent } from './demo-bill.component';

describe('DemoBillComponent', () => {
  let component: DemoBillComponent;
  let fixture: ComponentFixture<DemoBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
