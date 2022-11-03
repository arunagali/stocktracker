import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentpageComponent } from './sentimentpage.component';

describe('SentimentpageComponent', () => {
  let component: SentimentpageComponent;
  let fixture: ComponentFixture<SentimentpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
