import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentdogsComponent } from './parentdogs.component';

describe('ParentdogsComponent', () => {
  let component: ParentdogsComponent;
  let fixture: ComponentFixture<ParentdogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentdogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentdogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
