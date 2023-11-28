import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[pointerExited]',
  standalone: true
})
export class PointerExitedDirective {

  element = inject(ElementRef);

  constructor() { 

  }

  ngOnInit() {
    this.element.nativeElement.style.cursor='default';
  }

}
