import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWashpacksComponent } from './manage-washpacks.component';

describe('ManageWashpacksComponent', () => {
  let component: ManageWashpacksComponent;
  let fixture: ComponentFixture<ManageWashpacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageWashpacksComponent]
    });
    fixture = TestBed.createComponent(ManageWashpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
