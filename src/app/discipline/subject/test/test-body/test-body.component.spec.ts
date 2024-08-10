import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBodyComponent } from './test-body.component';

describe('TestBodyComponent', () => {
  let component: TestBodyComponent;
  let fixture: ComponentFixture<TestBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBodyComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
