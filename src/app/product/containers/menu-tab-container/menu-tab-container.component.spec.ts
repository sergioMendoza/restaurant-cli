import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabContainerComponent } from './menu-tab-container.component';

describe('MenuTabContainerComponent', () => {
  let component: MenuTabContainerComponent;
  let fixture: ComponentFixture<MenuTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
