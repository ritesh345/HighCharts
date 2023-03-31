import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TofixedComponent } from './tofixed.component';

describe('TofixedComponent', () => {
  let component: TofixedComponent;
  let fixture: ComponentFixture<TofixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TofixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TofixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
