import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooglebuttonComponent } from './tooglebutton.component';

describe('TooglebuttonComponent', () => {
  let component: TooglebuttonComponent;
  let fixture: ComponentFixture<TooglebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooglebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooglebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
