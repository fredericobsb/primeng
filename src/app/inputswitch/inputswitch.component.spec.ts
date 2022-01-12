import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputswitchComponent } from './inputswitch.component';

describe('InputswitchComponent', () => {
  let component: InputswitchComponent;
  let fixture: ComponentFixture<InputswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
