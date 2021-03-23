import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTabContainerComponent } from './category-tab-container.component';

describe('CategoryTabContainerComponent', () => {
  let component: CategoryTabContainerComponent;
  let fixture: ComponentFixture<CategoryTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
