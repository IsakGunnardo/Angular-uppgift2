import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = "";
  email: string = "";
  textarea: string = "";
  facebook = faFacebook
  linkedin = faLinkedin
  github = faGithub
  formVar: any = FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formVar = this.fb.group({
      name: ['', Validators.required], //Validators.required lets you reset the input on submit without using ngModel
      email: ['', [Validators.required, Validators.email]],
      textarea: ['', Validators.required]

    })
  }


  onSubmit() {
    console.log(this.formVar.value)
    this.formVar.reset()
  }
}
