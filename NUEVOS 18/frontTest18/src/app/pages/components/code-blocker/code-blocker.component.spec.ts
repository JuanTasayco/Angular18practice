import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlockerComponent } from './code-blocker.component';

describe('CodeBlockerComponent', () => {
  let component: CodeBlockerComponent;
  let fixture: ComponentFixture<CodeBlockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBlockerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
