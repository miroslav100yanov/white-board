import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderBackNavigatorComponent } from './header-back-navigator.component';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderBackNavigatorComponent', () => {
  let component: HeaderBackNavigatorComponent;
  let fixture: ComponentFixture<HeaderBackNavigatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [
        HeaderBackNavigatorComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBackNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
