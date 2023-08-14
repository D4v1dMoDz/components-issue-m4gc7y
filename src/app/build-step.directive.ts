import { ComponentRef, Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Step } from './app.component';
import { BaseStep } from './base-step';

@Directive({
  selector: '[appBuildStep]'
})
export class BuildStepDirective implements OnInit {
  @Input() data?: Step;

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    if(this.data) {
      let componentRef = this.viewContainerRef.createComponent(this.data.templateRef);
      if(componentRef.instance instanceof BaseStep) {
        componentRef.instance.stepData = this.data;
      }
    }
  }
}
