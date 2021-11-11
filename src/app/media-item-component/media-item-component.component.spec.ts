import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemComponentComponent } from './media-item-component.component';

describe('MediaItemComponentComponent', () => {
  let component: MediaItemComponentComponent;
  let fixture: ComponentFixture<MediaItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
