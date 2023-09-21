import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwashpacksComponent } from './userwashpacks.component';

describe('UserwashpacksComponent', () => {
  let component: UserwashpacksComponent;
  let fixture: ComponentFixture<UserwashpacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserwashpacksComponent]
    });
    fixture = TestBed.createComponent(UserwashpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
