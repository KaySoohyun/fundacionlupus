import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundacion',
  templateUrl: './fundacion.component.html',
  styleUrls: ['./fundacion.component.scss']
})
export class FundacionComponent implements OnInit {
  sections = [
    { name: 'La fundación', id: 0 },
    { name: 'Nuestro equipo', id: 1 },
    { name: 'Red de amigos', id: 2 },
  ]
  currentSection: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
