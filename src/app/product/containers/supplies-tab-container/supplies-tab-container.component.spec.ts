import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesTabContainerComponent } from './supplies-tab-container.component';

describe('SuppliesTabContainerComponent', () => {
  let component: SuppliesTabContainerComponent;
  let fixture: ComponentFixture<SuppliesTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
