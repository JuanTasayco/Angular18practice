import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesignsComponent } from './material-designs.component';

describe('MaterialDesignsComponent', () => {
  let component: MaterialDesignsComponent;
  let fixture: ComponentFixture<MaterialDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDesignsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MaterialDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
