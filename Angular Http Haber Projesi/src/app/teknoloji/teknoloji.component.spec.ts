import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeknolojiComponent } from './teknoloji.component';

describe('TeknolojiComponent', () => {
  let component: TeknolojiComponent;
  let fixture: ComponentFixture<TeknolojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeknolojiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeknolojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
