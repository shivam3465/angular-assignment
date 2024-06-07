import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SelectCountryComponent } from './select-country/select-country.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { HandleDocumentUpload } from './document-upload/handle-document-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    SelectCountryComponent,
    DocumentListComponent,
    HandleDocumentUpload,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentStep = 1;
  selectedCountry: any = 'none';
  documents: string[] = [];

  goToNext() {
    this.currentStep++;
  }

  goToPrevious() {
    this.currentStep--;
  }

  onCountryChange(country: any) {
    this.selectedCountry = country;
    this.documents = country.documents;
    if (this.currentStep === 1) this.goToNext();
  }

  goToUploadDocument() {
    if (this.currentStep === 2) this.goToNext();
  }

  //  this will be used when you want to to to particular step and also reset the data
  changeStep(step: number) {
    this.currentStep = step;
    this.selectedCountry = 'none';
    this.documents = [];
  }
}
