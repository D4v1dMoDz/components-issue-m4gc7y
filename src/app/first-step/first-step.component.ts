import { Component, OnInit } from '@angular/core';
import { Step } from '../app.component';
import { BaseStep } from '../base-step';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent extends BaseStep {
}
