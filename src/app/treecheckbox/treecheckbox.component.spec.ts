import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreecheckboxComponent } from './treecheckbox.component';

describe('TreecheckboxComponent', () => {
  let component: TreecheckboxComponent;
  let fixture: ComponentFixture<TreecheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreecheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreecheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
