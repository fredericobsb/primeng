import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieredmenuComponent } from './tieredmenu.component';

describe('TieredmenuComponent', () => {
  let component: TieredmenuComponent;
  let fixture: ComponentFixture<TieredmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TieredmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TieredmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
