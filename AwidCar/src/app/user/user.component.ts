import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  
  constructor(private userService: UserService) { }

  users: any = [];
  showPassword = false;

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(){
    this.userService.getAllUsers().subscribe((result) => {
      this.users = result;
      console.log(result)
    })
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
