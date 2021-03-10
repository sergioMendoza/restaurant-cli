import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabListComponent } from './product-tab-list.component';

describe('ProductTabListComponent', () => {
  let component: ProductTabListComponent;
  let fixture: ComponentFixture<ProductTabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
