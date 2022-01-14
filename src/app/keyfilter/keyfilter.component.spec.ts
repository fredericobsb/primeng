import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyfilterComponent } from './keyfilter.component';

describe('KeyfilterComponent', () => {
  let component: KeyfilterComponent;
  let fixture: ComponentFixture<KeyfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
