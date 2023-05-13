import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('loginForm') form!: NgForm;

  model: any = {};

  ngOnInit(): void {
  }



  onSubmit() {
    console.log(this.form);
    console.log(this.model);
    this.router.navigateByUrl("views/dashboard");

  }

}
