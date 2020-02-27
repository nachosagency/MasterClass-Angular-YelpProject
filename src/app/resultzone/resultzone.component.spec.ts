import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultzoneComponent } from './resultzone.component';

describe('ResultzoneComponent', () => {
  let component: ResultzoneComponent;
  let fixture: ComponentFixture<ResultzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
