import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvcalcComponent } from './ivcalc.component';

describe('IvcalcComponent', () => {
  let component: IvcalcComponent;
  let fixture: ComponentFixture<IvcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvcalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
