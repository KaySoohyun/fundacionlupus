import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Items from '../../../../assets/testimonios.json';

@Component({
  selector: 'app-testimonios-item',
  templateUrl: './testimonios-item.component.html',
  styleUrls: ['./testimonios-item.component.scss']
})
export class TestimoniosItemComponent implements OnInit {
  testimonios: any[] = Items;
  currentItem: any;
  text: string[] = [];
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      if (id) {
        this.currentItem = this.testimonios[parseInt(id)]
        if (this.currentItem.text) {
          this.text = this.currentItem.text.split("/n");
        }
      }
    });
  }

}
