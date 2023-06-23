import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any={};
  loggedIn=false;
  constructor(private accountSerice: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountSerice.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.loggedIn=true;
      },
      error: error => {console.log(error); }
    })
  }

  logout(){
    this.loggedIn=false;
  }

}
