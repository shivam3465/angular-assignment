import { CountryData } from './../../data/countryData';


import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SelectCountryComponent } from '../select-country/select-country.component';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  standalone : true,
  imports : [CommonModule,FormsModule ,SelectCountryComponent]
})
export class DocumentListComponent  {
  @Input() selectedCountry: any;
  @Input() documents: string[] = [];
  countries  = CountryData;
  @Output() goToUploadDocument = new EventEmitter<any>();

  constructor() {}


  onCountryChange(country: any) {
    this.selectedCountry = country;
  }

  goToUploadPage() {    
    this.goToUploadDocument.emit();
  }


}
