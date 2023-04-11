import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Users} from "../model/Users";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  user!:Users
  private stompClient: any;
  userList: Users[] = [];

  constructor(private userService: UserService,
              private router: Router,
              private toastr: ToastrService) {
  }
  ngOnInit(): void {
    // this.userService.showAllUser().subscribe((data) => {
    //   this.userList = data
    // })
    //
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
    //   password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(6), Validators.maxLength(32)])
    // });
  }
}
