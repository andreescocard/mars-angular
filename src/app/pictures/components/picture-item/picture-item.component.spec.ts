import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureItemComponent } from './picture-item.component';

describe('PictureItemComponent', () => {
  let component: PictureItemComponent;
  let fixture: ComponentFixture<PictureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
