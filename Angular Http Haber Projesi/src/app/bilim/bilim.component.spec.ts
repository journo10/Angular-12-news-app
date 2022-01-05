import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilimComponent } from './bilim.component';

describe('BilimComponent', () => {
  let component: BilimComponent;
  let fixture: ComponentFixture<BilimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
