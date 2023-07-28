import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form,NgForm } from '@angular/forms';
import { Student } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  student: Student={
    roll_no: 0,
    fullname: '',
    email: '',
    phone_no: 0,
    dept: '',
    clg: '',
    dob: null,
  }
  showPreview=false;
  constructor(private http :HttpClient,private router: Router) {}
  ngOnInit() {}
  register(form: NgForm) {
    this.student=form.value;
    console.log(this.student);
    this.http.post('http://localhost:4020/register', this.student).subscribe(response => {
      console.log("response",response);
    })
    this.router.navigate(['/','display']);
    form.reset();
  }
  togglePreview(form: NgForm) {
    this.showPreview = !this.showPreview;
    this.student = form.value;
  }
}
