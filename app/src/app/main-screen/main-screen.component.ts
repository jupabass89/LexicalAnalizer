import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {AnalizerService} from '../analizer.service'

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  mainForm: FormGroup;
  showList = false;
  tokenList = [];

  constructor(private formBuilder: FormBuilder, private analizer: AnalizerService) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      textArea: ["", Validators.required],
    });
  }

  onSubmit() {
    if(this.mainForm.valid){
      this.showList= true;
      this.tokenList = [];
      this.simpleTokenizer(this.mainForm.get('textArea').value);
      this.analizer.analyze(this.tokenList);
    }
  }

  simpleTokenizer(array: any) {
    let lines = this.textArea.split('\n');
    lines.forEach(line => {
      if (line !== "") {
        line.split(' ').forEach(token=>{
          if (token !== "") {
          this.tokenList.push(token);
          }
        })
      }
    });
  }

  // Getters
  get textArea(): string {
    return this.mainForm.get('textArea').value;
  }
}
