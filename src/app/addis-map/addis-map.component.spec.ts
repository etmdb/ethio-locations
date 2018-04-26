import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddisMapComponent } from './addis-map.component';

describe('AddisMapComponent', () => {
  let component: AddisMapComponent;
  let fixture: ComponentFixture<AddisMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddisMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddisMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
