import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as cc from '../ckeditor5-build-classic/build/ckeditor';
@Component({
  selector: 'app-readonlycke',
  templateUrl: './readonlycke.component.html',
  styleUrls: ['./readonlycke.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReadonlyckeComponent),
      multi: true,
    },
  ],
})
export class ReadonlyckeComponent implements OnInit, ControlValueAccessor {
  @Input() readonly: boolean = false;
  public Editor = cc;
  private _value: string = '';
  @Input() config = {};

  constructor() {}
  get value() {
    return this._value;
  }
  set value(v: string) {
    if (v !== this._value) {
      this._value = v;

      this.onChange(v);
    }
  }
  onChange(_) {}
  onTouch(){}
  writeValue(obj: any): void {
    this._value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._value = fn;
  }

  ngOnInit(): void {}
}
