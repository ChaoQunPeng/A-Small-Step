import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';

@Directive({
  selector: '[input-required]'
})
export class InputRequiredDirective {

  constructor(private el: ElementRef, private control: NgControl, renderer: Renderer2) {
    renderer.addClass(el.nativeElement,"pcq-class");
  }

  @HostListener("keydown", ["$event"])
  keydownFun(evt) {
    if (evt.key.trim() == '') {
      evt.preventDefault();
    }
  }

  @HostListener("keyup", ["$event", "$event.target"])
  keyupFun(evt, target) {
    if (target.value) {
      this.control.control.setValue(target.value.replace(/(\s*)/g, ""));
    }
  }

}
