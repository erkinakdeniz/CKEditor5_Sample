import { Component, Input } from '@angular/core';
import * as cc from './ckeditor5-build-classic/build/ckeditor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';

  public htmldata:string='hello';
 public readonly:boolean=true;
public config={toolbar: {items:[]}};

 
  /**
   *
   */
  constructor() {
    setInterval(()=>{console.log(this.htmldata)},2000)
    
  }
  
 
}
