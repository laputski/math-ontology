import { Component, Optional } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./indigo-pink.css','./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  show = false;
}
