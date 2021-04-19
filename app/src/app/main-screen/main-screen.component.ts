import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  mainForm: FormGroup;
  showList = false;
  tokenList = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      textArea: ["", Validators.required],
    });
  }

  onSubmit() {
    this.showList= true;
    this.tokenList = this.textArea.split('');
  }


  get textArea(): string {
    return this.mainForm.get('textArea').value;
  }

}
