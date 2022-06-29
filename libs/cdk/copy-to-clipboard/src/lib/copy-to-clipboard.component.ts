import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'copy-to-clipboard-button',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss'],
})
export class CopyToClipboardComponent {
  @ViewChild('tooltip') tooltip: MatTooltip;

  templateRef: TemplateRef<any>;
  payload: string;
  dense = true;

  constructor(private elementRef: ElementRef) {}

  onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const textarea = document.createElement('textarea');
    textarea.setAttribute('style', 'width:1px;border:0;opacity:0;position:absolute;');
    textarea.value = this.payload;
    this.elementRef.nativeElement.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');

    this.elementRef.nativeElement.removeChild(textarea);

    (this.tooltip as any).show();
    setTimeout(() => {
      (this.tooltip as any).hide();
    }, 1000);
  }
}
