import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[background]' // Attribute selector
})
export class BackgroundDirective {

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'lightgray';
    this.el.nativeElement.style.color = '#000';
  }

}
