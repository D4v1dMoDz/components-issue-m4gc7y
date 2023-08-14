import { Component, TemplateRef, Type } from '@angular/core';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';
import { BaseStep } from './base-step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup = this.formBuilder.group({
    name: [null, Validators.required]
  })

  steps: Array<Step> = [
    {
      stepLabel: "First Step",
      templateRef: FirstStepComponent,
      formGroup: this.formGroup
    },
    {
      stepLabel: "Second Step",
      templateRef: SecondStepComponent,
      formGroup: this.formGroup 
    },
    {
      stepLabel: "Third Step",
      templateRef: ThirdStepComponent,
      formGroup: this.formGroup
    },
    {
      stepLabel: "Fourth Step",
      templateRef: FourthStepComponent,
      formGroup: this.formGroup
    }
  ]

  constructor(private formBuilder: FormBuilder) {}
}

export interface Step {
  stepLabel: string;
  templateRef: Type<BaseStep>;
  formGroup: FormGroup;
  onConfirmStep?: () => void;
}
