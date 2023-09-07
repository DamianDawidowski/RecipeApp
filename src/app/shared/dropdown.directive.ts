import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
 
export class DropdownDirective {
  
   @HostBinding('class.open') isOpen:boolean =false;

    constructor(private ElRef: ElementRef, private rendered: Renderer2) { }

    @HostListener('click') open() {
        this.isOpen = !this.isOpen
   
      // this.backGroundColor = this.highlightColor
    }
    

}