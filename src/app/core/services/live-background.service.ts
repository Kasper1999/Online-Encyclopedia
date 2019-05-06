import { Injectable } from '@angular/core';

@Injectable()
export class LiveBackgroundService {
  livePattern: any = {
    canvas: null,
    context: null,
    cols: 0,
    rows: 0,
    colors: [252, 251, 249, 248, 241, 240],
    triangleColors: [],
    destColors: []
  };

  constructor() {}

  backgroundInit(): void {
    this.livePattern.canvas = document.getElementById('canvas');
    this.livePattern.context = this.livePattern.canvas.getContext('2d');
    this.livePattern.cols = Math.floor(document.body.clientWidth / 23);
    this.livePattern.rows = Math.floor(document.body.clientHeight / 23);

    this.livePattern.canvas.width = document.body.clientWidth;
    this.livePattern.canvas.height = document.body.clientHeight;

    this.drawBackground();
    this.animateBackground();
  }

  drawTriangle(x: number, y: number, color: number, inverted: any): void {
    inverted = inverted === undefined ? false : inverted;

    this.livePattern.context.beginPath();
    this.livePattern.context.moveTo(x, y);
    this.livePattern.context.lineTo(inverted ? x - 22 : x + 22, y + 11);
    this.livePattern.context.lineTo(x, y + 22);
    this.livePattern.context.fillStyle =
      'rgb(' + color + ',' + color + ',' + color + ')';
    this.livePattern.context.fill();
    this.livePattern.context.closePath();
  }

  getColor(): number {
    return this.livePattern.colors[Math.floor(Math.random() * 6)];
  }

  drawBackground(): void {
    let eq: number = null;
    let x: number = this.livePattern.cols;
    let destY = 0;
    let y: number;

    while (x--) {
      eq = x % 2;
      y = this.livePattern.rows;

      while (y--) {
        destY = Math.round((y - 0.5) * 24);

        this.drawTriangle(
          x * 24 + 2,
          eq === 1 ? destY : y * 24,
          this.getColor(),
          true
        );
        this.drawTriangle(
          x * 24,
          eq === 1 ? destY : y * 24,
          this.getColor(),
          true
        );
      }
    }
  }

  animateBackground(): void {
    const me = this;

    const x: number = Math.floor(Math.random() * this.livePattern.cols);
    const y: number = Math.floor(Math.random() * this.livePattern.rows);
    const eq: number = x % 2;

    if (eq === 1) {
      me.drawTriangle(
        x * 24,
        Math.round((y - 0.5) * 24),
        this.getColor(),
        true
      );
    } else {
      me.drawTriangle(x * 24 + 2, y * 24, this.getColor(), false);
    }

    setTimeout(() => {
      me.animateBackground.call(me);
    }, 10);
  }
}
