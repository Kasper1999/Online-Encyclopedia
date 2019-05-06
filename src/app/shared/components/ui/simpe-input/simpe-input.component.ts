import { Component, OnInit, OnChanges, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-simpe-input',
  templateUrl: './simpe-input.component.html',
  styleUrls: ['./simpe-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpeInputComponent),
      multi: true },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SimpeInputComponent),
      multi: true,
    }
  ]
})
export class SimpeInputComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() type: string;

  private inputValue: any;
  private inputError: boolean;

  minLength: number;
  maxLength: number;

  private propagateChange = (_: any) => { };
  validateFn: any = () => {};

  ngOnInit() {
    this.minLength = 2;
    this.maxLength = 30;
    this.inputError = false;
  }

  ngOnChanges() {
  }

  writeValue(value) {
    if (value) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  private onChange(event) {
    const newValue = event.target.value;
    this.propagateChange(newValue);
    this.inputValue = newValue;
  }

  public validate(c: FormControl) {
    const err = {
      rangeError: {
        given: c.value,
        max: this.maxLength || 10,
        min: this.minLength || 0
      }
    };
    if (c.value > +this.maxLength || c.value < +this.minLength) {
      this.inputError = true;
      return err;
    } else {
      this.inputError = false;
      return null;
    }
  }

}
