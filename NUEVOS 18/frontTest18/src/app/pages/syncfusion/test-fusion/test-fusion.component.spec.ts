import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFusionComponent } from './test-fusion.component';

describe('TestFusionComponent', () => {
  let component: TestFusionComponent;
  let fixture: ComponentFixture<TestFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFusionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
