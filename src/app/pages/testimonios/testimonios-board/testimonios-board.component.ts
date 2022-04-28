import { Component, OnInit } from '@angular/core';
import Items from '../../../../assets/testimonios.json';

@Component({
  selector: 'app-testimonios-board',
  templateUrl: './testimonios-board.component.html',
  styleUrls: ['./testimonios-board.component.scss']
})
export class TestimoniosBoardComponent implements OnInit {
  testimonios: any[] = Items;
  constructor() { }

  ngOnInit() {
    this.testimonios.forEach((element) => {
      if (element.text) {
        element.text = element.text.replaceAll("/n", " ");
      }
    });
  }

}
