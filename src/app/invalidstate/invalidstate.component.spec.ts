import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidstateComponent } from './invalidstate.component';

describe('InvalidstateComponent', () => {
  let component: InvalidstateComponent;
  let fixture: ComponentFixture<InvalidstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
