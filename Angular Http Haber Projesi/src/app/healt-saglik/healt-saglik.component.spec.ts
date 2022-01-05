import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtSaglikComponent } from './healt-saglik.component';

describe('HealtSaglikComponent', () => {
  let component: HealtSaglikComponent;
  let fixture: ComponentFixture<HealtSaglikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealtSaglikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealtSaglikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
