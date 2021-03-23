import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboTabContainerComponent } from './combo-tab-container.component';

describe('ComboTabContainerComponent', () => {
  let component: ComboTabContainerComponent;
  let fixture: ComponentFixture<ComboTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
