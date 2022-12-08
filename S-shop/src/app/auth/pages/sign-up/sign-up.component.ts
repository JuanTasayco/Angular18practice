import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  signForm: FormGroup = this.fb.group({

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
