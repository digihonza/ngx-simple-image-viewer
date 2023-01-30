import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleImageViewerComponent } from './ngx-simple-image-viewer.component';

describe('NgxSimpleImageViewerComponent', () => {
  let component: NgxSimpleImageViewerComponent;
  let fixture: ComponentFixture<NgxSimpleImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleImageViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
