import { MessagesComponent } from '../../components/messages/messages.component';
import { RequestComponent } from '../../components/request/request.component';
import { CompanyComponent } from '../../components/company/company.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Component } from '@angular/core';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-role-based',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, RequestComponent],
  templateUrl: './role-based.component.html',
  styleUrl: './role-based.component.css'
})
export class RoleBasedComponent {

 requests: any = [];  

  constructor(
    private requestService: ChatsService  // ✅ Corrected service injection
  ) {}
  ngOnInit() {
   
    // Fetch requests
    this.requestService.getRequests().subscribe({
      next: (data) => {
        this.requests = data;
      },
      error: (err) => {
        console.error('Error fetching requests:', err);
      }
    });
  }


 approveRequest() {
    alert("Role request approved!");
   
}

rejectRequest() {
    alert("Role request rejected!");

}

}
