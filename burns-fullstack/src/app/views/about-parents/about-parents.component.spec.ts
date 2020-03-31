import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParentsComponent } from './about-parents.component';

describe('AboutParentsComponent', () => {
  let component: AboutParentsComponent;
  let fixture: ComponentFixture<AboutParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
