import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CopyToClipboardComponent } from './copy-to-clipboard.component';

@Directive({
  selector: '[copyToClipboard]',
})
export class CopyToClipboardDirective implements OnChanges, OnDestroy {
  @Input('copyToClipboard') payload: string;
  @Input('copyToClipboardDense') dense: boolean;

  componentRef: ComponentRef<CopyToClipboardComponent>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!this.componentRef) {
      this.viewContainer.clear();
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(CopyToClipboardComponent);
      this.componentRef = this.viewContainer.createComponent(componentFactory);

      this.componentRef.instance.templateRef = this.templateRef;
    }
    this.componentRef.instance.payload = changes.payload.currentValue;

    if (changes.dense) {
      this.componentRef.instance.dense = changes.dense.currentValue;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
