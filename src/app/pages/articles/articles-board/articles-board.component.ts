import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-board',
  templateUrl: './articles-board.component.html',
  styleUrls: ['./articles-board.component.scss']
})
export class ArticlesBoardComponent implements OnInit {
  articles: any[] = [
    { title: 'Lupus', description: 'Qué es y que sabemos.', path: '/lupus' },
    { title: 'Cuidados', description: 'Cuidados generales de salud.', path: '/cuidados' },
    { title: 'Sintomas', description: 'Sintomas habituales.', path: '/sintomas' },
    { title: 'Hospitales', description: 'Lugares de atención, farmacias y más.', path: '/hospitales' },
    { title: 'Salud pública y social', description: 'Obras sociales, coberturas y leyes.', path: '/salud-publica' },
    { title: 'El lupus y los niños', description: 'Cómo afecta en niños', path: '/lupus-y-niños' },
    { title: 'Lupus neonatal', description: 'Cómo afecta al feto y al recién nacido.', path: '/lupus-neonatal' },
    { title: 'Diagnóstico', description: 'Exámen médico y laboratorio', path: '/diagnostico' },
    { title: 'Tratamiento', description: 'Tratamientos y pronóstico', path: '/tratamiento' },
    { title: 'Lupus y OAM', description: 'Lupus sobre el sistema osteoarticulomuscular', path: '/lupus-y-oam' },
    // { title: '', description: '', path: '' },
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
