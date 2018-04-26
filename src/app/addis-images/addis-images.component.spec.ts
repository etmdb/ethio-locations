import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddisImagesComponent } from './addis-images.component';

describe('AddisImagesComponent', () => {
  let component: AddisImagesComponent;
  let fixture: ComponentFixture<AddisImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddisImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddisImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
