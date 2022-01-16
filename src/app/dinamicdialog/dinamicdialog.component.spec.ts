import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicdialogComponent } from './dinamicdialog.component';

describe('DinamicdialogComponent', () => {
  let component: DinamicdialogComponent;
  let fixture: ComponentFixture<DinamicdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
