import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyciesComponent } from './polycies.component';

describe('PolyciesComponent', () => {
  let component: PolyciesComponent;
  let fixture: ComponentFixture<PolyciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolyciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
