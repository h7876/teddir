import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowsComponent } from './svg-arrows.component';

describe('SvgArrowsComponent', () => {
  let component: SvgArrowsComponent;
  let fixture: ComponentFixture<SvgArrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgArrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
