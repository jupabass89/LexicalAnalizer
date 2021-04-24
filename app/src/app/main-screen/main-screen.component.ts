import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnalizerService } from '../analizer.service'
import { Lexico } from './Lexico';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  mainForm: FormGroup;
  showList = false;
  tokenList: Array<Lexico>;

  constructor(private formBuilder: FormBuilder, private analizer: AnalizerService) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      textArea: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.mainForm.valid) {
      this.showList = true;
      this.tokenList = this.analizer.analyze((this.mainForm.get('textArea').value));

    }
  }

  // Getters
  get textArea(): string {
    return this.mainForm.get('textArea').value;
  }
}
