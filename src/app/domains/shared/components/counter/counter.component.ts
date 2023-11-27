import { Component, Input, SimpleChange, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor(){
    // NO ASYNC OPERATIONS
    // before rendering
    console.log('constructor');
    console.log('-', repeat(10));
  }

  ngOnChanges(changes: SimpleChange){
    //before and during rendering
    console.log('ngOnChanges');
    console.log('-', repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    //after rendering
    //una vez
    //asunc, then, subs
    console.log('ngOnInit');
    console.log('-', repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    /*if (typeof window !== "undefined") {
      this.counterRef = Number(window.setInterval(() => {
        console.log('run interval')
        this.counter.update(statePrev => statePrev + 1);
      },1000));
    }*/
    //Esto produce el error document is not defined 
  }
  

  ngAfterViewInit(){
    //after rendering
    // hijos ya fueron pintados
    console.log('ngAfterViewInit es despues del ngOnInit');
    console.log('-', repeat(10));
  }

  ngOnDestroy(){  
    //before destroying
    console.log('ngOnDestroy');
    console.log('-', repeat(10));
    if (this.counterRef) {
      clearInterval(this.counterRef);
    }
  }

  doSomething(){
    console.log('change duration');
    console.log('-', repeat(10));
  }
}
