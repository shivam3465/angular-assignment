import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleDocumentUpload } from './handle-document-upload.component';

describe('HandleDocumentUpload', () => {
  let component: HandleDocumentUpload;
  let fixture: ComponentFixture<HandleDocumentUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandleDocumentUpload]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandleDocumentUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
