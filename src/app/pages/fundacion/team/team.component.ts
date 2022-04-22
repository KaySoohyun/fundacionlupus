import { Component, OnInit } from '@angular/core';
import Miembros from '../../../../assets/miembros.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: any[] = Miembros;
  constructor() { }

  ngOnInit(): void {
  }

  getImage(image: string) {
    console.log(image);
    return image;
  }
}
