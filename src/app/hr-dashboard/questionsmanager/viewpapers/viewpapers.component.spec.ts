import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpapersComponent } from './viewpapers.component';

describe('ViewpapersComponent', () => {
  let component: ViewpapersComponent;
  let fixture: ComponentFixture<ViewpapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
