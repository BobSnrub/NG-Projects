import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFutureComponent } from './reserve-future.component';

describe('ReserveFutureComponent', () => {
  let component: ReserveFutureComponent;
  let fixture: ComponentFixture<ReserveFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
