import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundacion-lupus';
  menu = false;

  onOpenMenu() {
    this.menu = !this.menu;
  }
}
