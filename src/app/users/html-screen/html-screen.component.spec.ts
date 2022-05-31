import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlScreenComponent } from './html-screen.component';

describe('HtmlScreenComponent', () => {
  let component: HtmlScreenComponent;
  let fixture: ComponentFixture<HtmlScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
