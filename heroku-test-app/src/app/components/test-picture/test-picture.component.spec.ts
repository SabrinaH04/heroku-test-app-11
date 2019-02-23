import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPictureComponent } from './test-picture.component';

describe('TestPictureComponent', () => {
  let component: TestPictureComponent;
  let fixture: ComponentFixture<TestPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
