import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderPage } from './uploader.page';

describe('UploaderPage', () => {
  let component: UploaderPage;
  let fixture: ComponentFixture<UploaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
