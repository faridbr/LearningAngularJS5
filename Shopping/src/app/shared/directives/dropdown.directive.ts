import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
    setTimeout(() => {()=>{
      this.isOpen = false;
    }
    }, 3000);
  }
  constructor() { }

}
