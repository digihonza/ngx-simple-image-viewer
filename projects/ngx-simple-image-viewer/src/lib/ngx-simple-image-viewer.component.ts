import { Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-simple-image-viewer',
  templateUrl: './ngx-simple-image-viewer.component.html',
  styleUrls: ['./ngx-simple-image-viewer.component.scss']
})
export class NgxSimpleImageViewerComponent implements OnChanges {

  @Input() fileName: string = '';
  @Input() src: string | undefined;

  @ViewChild('image') image: ElementRef | undefined;

  private rotationAngle = 0;
  private scale = 1;
  private translateX = 0;
  private translateY = 0;
  
  constructor(private readonly renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
      this.clearPreviousStyles();
    }
  }

  private clearPreviousStyles(): void {
    if (this.image?.nativeElement) {
      this.revert();
    }
  }

  scaleUp(): void {
    this.scale+=0.1;
    this.transformImage();
  }

  scaleDown(): void {
    if (this.scale > 0.2) {
      this.scale-=0.1;
      this.transformImage();
    }
  }

  rotateRight(): void {
    this.rotationAngle+=90;
    this.transformImage();
  }
  
  rotateLeft(): void {
    this.rotationAngle-=90;
    this.transformImage();
  }

  onMouseWheel(e: any): void {
    if (e.deltaY < 0) {
      this.scaleUp();
    } else if (e.deltaY > 0) {
      this.scaleDown();
    }
  }

  
  private dragActive = false;
  private initialClientX = 0;
  private initialClientY = 0;
  private xOffset = 0;
  private yOffset = 0;
  activateDrag(e: any): void {
    this.initialClientX = e.clientX;
    this.initialClientY = e.clientY;
    this.dragActive = true;
    this.renderer.addClass(this.image?.nativeElement, 'drag-active');
  }

  deactivateDrag(e: any): void {
    if (this.dragActive) {
      this.xOffset = this.translateX;
      this.yOffset = this.translateY;
      this.dragActive = false;
      this.renderer.removeClass(this.image?.nativeElement, 'drag-active');
    }
  }

  onMouseMove(e: any): void {
    if (this.dragActive) {
      this.translateX = this.xOffset + e.clientX - this.initialClientX;
      this.translateY = this.yOffset + e.clientY - this.initialClientY;
      this.transformImage();
    }
  }

  revert(): void {
    this.renderer.setStyle(this.image?.nativeElement, 'transform', `revert` );
    this.translateX = 0;
    this.translateY = 0;
    this.rotationAngle = 0;
    this.scale = 1;
    this.xOffset = 0;
    this.yOffset = 0;
  }

  private transformImage(): void {
    this.renderer.setStyle(this.image?.nativeElement, 'transform', `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotationAngle}deg) scale(${this.scale})` );
  }
}
