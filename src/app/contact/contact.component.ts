import { Component, OnInit } from '@angular/core';
import { FormGroup ,  FormControl , Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    username : new FormControl('',Validators.required),
    email : new FormControl('', Validators.required),
    message : new FormControl('', Validators.required)
  });


  ngOnInit(): void {
  }
  get username(){
    return this.contactForm.get('username');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get message(){
    return this.contactForm.get('email');
  }
  constructor() { }
}