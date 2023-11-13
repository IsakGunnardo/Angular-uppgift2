import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  facebook = faFacebook
  linkedin = faLinkedin
  github = faGithub
  footForm: any = FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.footForm = this.fb.group({
      name: ['', Validators.required], //Validators.required lets you reset the input on submit without using ngModel
      email: ['', [Validators.required, Validators.email]],
      textarea: ['', Validators.required]

    })
  }

  onSubmit() {
    console.log(this.footForm.value)
    this.footForm.reset()
  }
}
