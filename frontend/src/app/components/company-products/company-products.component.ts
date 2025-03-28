import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-products',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './company-products.component.html',
  styleUrls: ['./company-products.component.css']
})
export class CompanyProductsComponent {
  // List of company product trials
  companyProductData = [
    { id: 1, title: "#Trial123", Result: "85%" },
    { id: 2, title: "#Trial124", Result: "75%" }
  ];

  viewTrials(trialTitle: string) {
    console.log(`Viewing trials for ${trialTitle}`);
  }
}
