import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[pointerEntered]',
  standalone: true
})
export class PointerEnterDirective {

  element = inject(ElementRef);

  constructor() { 

  }

  ngOnInit() {
    this.element.nativeElement.style.cursor='pointer';
  }

}
