import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateTemplateComponent } from './corporate-template.component';

describe('CorporateTemplateComponent', () => {
  let component: CorporateTemplateComponent;
  let fixture: ComponentFixture<CorporateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
