import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appRepoHighlight]'
})
export class RepoHighlightDirective {
  @HostListener("click") onClicks(){
    this.changeColor("aqua");
  }

  constructor(private elem:ElementRef) {}
  private changeColor(action:string){
    this.elem.nativeElement.style.color = action;
  }

}
