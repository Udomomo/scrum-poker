import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumPokerPageComponent } from './scrum-poker-page.component';

describe('ScrumPokerPageComponent', () => {
  let component: ScrumPokerPageComponent;
  let fixture: ComponentFixture<ScrumPokerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrumPokerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrumPokerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
