import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser;
  constructor(private router: Router, private authGuardService: AuthGuardService) { }

  ngOnInit() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    this.currentUser = this.authGuardService.getCurrentUser();
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
    if(!this.authGuardService.canActivate()){
      this.router.navigateByUrl('/admin');
    }
  }

}
