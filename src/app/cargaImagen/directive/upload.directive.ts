import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective {

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter;

  constructor() {}


  @HostListener('onChange', ['$event'])
  public onChange( event:any) {
    this.mouseSobre.emit( true );
  }

}
