import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTabListComponent } from './category-tab-list.component';

describe('CategoryTabListComponent', () => {
  let component: CategoryTabListComponent;
  let fixture: ComponentFixture<CategoryTabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTabListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
