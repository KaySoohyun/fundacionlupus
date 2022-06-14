import { NeonatalComponent } from './pages/articles/neonatal/neonatal.component';
import { HospitalsComponent } from './pages/articles/hospitals/hospitals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaresComponent } from './pages/articles/cares/cares.component';
import { SympthomsComponent } from './pages/articles/sympthoms/sympthoms.component';
import { BlogBoardComponent } from './pages/blog/blog-board/blog-board.component';
import { BlogEntryComponent } from './pages/blog/blog-entry/blog-entry.component';
import { MainComponent } from './pages/main/main.component';
import { FundacionComponent } from './pages/fundacion/fundacion.component';
import { TestimoniosBoardComponent } from './pages/testimonios/testimonios-board/testimonios-board.component';
import { ArticlesBoardComponent } from './pages/articles/articles-board/articles-board.component';
import { PublicComponent } from './pages/articles/public/public.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MaratonComponent } from './pages/maraton/maraton.component';
import { LupusComponent } from './pages/articles/lupus/lupus.component';
import { TestimoniosItemComponent } from './pages/testimonios/testimonios-item/testimonios-item.component';
import { ChildrenComponent } from './pages/articles/children/children.component';
import { DiagnosticoComponent } from './pages/articles/diagnostico/diagnostico.component';
import { TratamientoComponent } from './pages/articles/tratamiento/tratamiento.component';
import { EventsBoardComponent } from './pages/events/events-board/events-board.component';
import { EventComponent } from './pages/events/event/event.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  // { path: 'blog', component: BlogBoardComponent},
  // { path: 'blog/:id', component: BlogEntryComponent },
  { path: 'cuidados', component: CaresComponent },
  { path: 'sintomas', component: SympthomsComponent },
  { path: 'hospitales', component: HospitalsComponent },
  { path: 'lupus-y-niños', component: ChildrenComponent},
  { path: 'lupus-neonatal', component: NeonatalComponent },
  { path: 'diagnostico', component: DiagnosticoComponent },
  { path: 'tratamiento', component: TratamientoComponent },
  { path: 'testimonios', component: TestimoniosBoardComponent },
  { path: 'testimonios/:id', component: TestimoniosItemComponent },
  { path: 'fundacion', component: FundacionComponent },
  { path: 'articulos', component: ArticlesBoardComponent },
  { path: 'salud-publica', component: PublicComponent },
  { path: 'contacto', component: ContactComponent },
  // { path: 'maraton', component: MaratonComponent },
  { path: 'lupus', component: LupusComponent },
  { path: 'eventos', component: EventsBoardComponent },
  { path: 'eventos/:name', component: EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
