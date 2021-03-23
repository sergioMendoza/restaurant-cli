import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDrinkTabContainerComponent } from './dish-drink-tab-container.component';

describe('DishDrinkTabContainerComponent', () => {
  let component: DishDrinkTabContainerComponent;
  let fixture: ComponentFixture<DishDrinkTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishDrinkTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDrinkTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
