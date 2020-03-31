import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePuppiesComponent } from './available-puppies.component';

describe('AvailablePuppiesComponent', () => {
  let component: AvailablePuppiesComponent;
  let fixture: ComponentFixture<AvailablePuppiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablePuppiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePuppiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
