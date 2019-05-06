import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { MatFormField } from "@angular/material";

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"]
})
export class ColorPickerComponent implements OnInit, AfterViewInit {
  @Input() defaultHex: string;
  @Input() onlyHex: boolean = false;
  // @Input() height: string = "30px";
  @Input() label: string = "";
  @Output() hexEmitter = new EventEmitter<{ value: string }>();

  @ViewChild("hexWrapper") wrap: MatFormField;
  hexValue: string = "ffffff";
  rgb: { value: number }[] = [{ value: 255 }, { value: 255 }, { value: 255 }];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.hexValue = this.defaultHex || "ffffff";
    this.updateRGB();
  }

  ngAfterViewInit() {
    this.updateColor();
  }

  onChangeHex(e) {
    let value = e.target.value;
    if (this.isValidValue(value)) {
      this.hexValue = value;
      this.updateRGB();
      this.updateColor();
      this.hexEmitter.emit({ value });
    }
  }

  onChangeRGB(e, ind) {
    let value = +e.target.value;
    if (this.isValidValue(value)) {
      this.rgb[ind].value = value;
      this.hexValue = this.getHexValue();
      this.updateColor();
      this.hexEmitter.emit({ value: this.hexValue });
    }
  }

  isValidValue(value: string | number): boolean {
    if (typeof value === "string") {
      return value.length === 6;
    }
    return value >= 0 && value <= 255;
  }

  updateRGB() {
    if (this.onlyHex) {
      this.rgb = [];
      return;
    }
    this.rgb.forEach((color, ind) => {
      color.value = parseInt(this.hexValue.substr(2 * ind, 2), 16);
    });
  }

  updateColor() {
    this.renderer.setStyle(
      this.wrap.underlineRef.nativeElement.firstChild,
      "background-color",
      `#${this.hexValue}`
    );
  }

  getHexValue(): string {
    return this.rgb.reduce((hex, color) => {
      let part = Number(color.value).toString(16);
      if (part.length === 1) {
        part = `0${part}`;
      }
      hex += part;
      return hex;
    }, "");
  }
}
