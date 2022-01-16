import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistdemoComponent } from './productlistdemo.component';

describe('ProductlistdemoComponent', () => {
  let component: ProductlistdemoComponent;
  let fixture: ComponentFixture<ProductlistdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
