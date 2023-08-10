import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-pta',
  templateUrl: './create-pta.component.html',
  styleUrls: ['./create-pta.component.scss']
})
export class CreatePtaComponent {

  createptaForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createptaForm = fb.group({});
  }

  onSubmit() {
    
  }
}
