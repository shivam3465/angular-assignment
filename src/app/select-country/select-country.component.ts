import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CountryData } from '../../data/countryData';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SelectCountryComponent {
  countries = CountryData;

  @Input() selectedCountry: any;
  @Output() countryChange = new EventEmitter<any>();

  onCountryChange() {
    this.countryChange.emit(this.selectedCountry);
  }
  constructor(private router: Router) {}
}
