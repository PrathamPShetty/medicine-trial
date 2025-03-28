import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request',
  imports: [CommonModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {
  @Input() requests: any; 

  cards = [
    { role:"Doctor", name: 'John Doe', age: 45 ,address:"Bantwal"},
    { role:"Company", name: 'Jane Smith', age: 52 ,address:"Bantwal"},
    { role:"Doctor", name: 'Alice Johnson', age: 39 ,address:"Bantwal"},
    { role:"Company", name: 'Bob Williams', age: 68 ,address:"Bantwal"},
    { role:"Doctor", name: 'Emma Brown', age: 55 ,address:"Bantwal"}
  ];
  
  approveCard(name: string) {
    alert(`${name} has been approved successfully! ✅`);
  }

  rejectCard(name: string) {
    alert(`${name} has been rejected! ❌`);
  }
}
