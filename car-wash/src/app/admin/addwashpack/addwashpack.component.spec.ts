import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwashpackComponent } from './addwashpack.component';

describe('AddwashpackComponent', () => {
  let component: AddwashpackComponent;
  let fixture: ComponentFixture<AddwashpackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddwashpackComponent]
    });
    fixture = TestBed.createComponent(AddwashpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
