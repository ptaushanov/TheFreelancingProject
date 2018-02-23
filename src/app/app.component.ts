import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      isOpen: boolean;

    // tslint:disable-next-line:one-line
    constructor(){
      this.isOpen = true;
    }
     // tslint:disable-next-line:one-line
     navToggle(){
       this.isOpen = !this.isOpen;
     }
}
