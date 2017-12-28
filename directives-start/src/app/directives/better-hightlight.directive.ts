import { Directive, Renderer2, OnInit, ElementRef,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{

  @Input('defaultColor') defaultColor = 'transparent'; 
  @Input('appBetterHightlight') highLightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white' )
  }

  @HostListener('mouseenter') mouseover(event: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue' );
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white' )
    this.backgroundColor =this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent' );
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black' );
    this.backgroundColor = this.defaultColor;
  }

  
}
