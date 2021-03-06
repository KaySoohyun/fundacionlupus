import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgendaLastEntriesComponent } from './pages/main/agenda-last-entries/agenda-last-entries.component';
import { BlogLastEntriesComponent } from './pages/main/blog-last-entries/blog-last-entries.component';
import { ContactComponent } from './pages/main/contact/contact.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { InfoSaludComponent } from './pages/main/info-salud/info-salud.component';
import { MainComponent } from './pages/main/main.component';
import { StatsComponent } from './pages/main/stats/stats.component';
import { TeamComponent } from './pages/fundacion/team/team.component';
import { BlogEntryComponent } from './pages/blog/blog-entry/blog-entry.component';
import { BlogBoardComponent } from './pages/blog/blog-board/blog-board.component';
import { SympthomsComponent } from './pages/articles/sympthoms/sympthoms.component';
import { CaresComponent } from './pages/articles/cares/cares.component';
import { HospitalsComponent } from './pages/articles/hospitals/hospitals.component';
import { FundacionComponent } from './pages/fundacion/fundacion.component';
import { TestimoniosBoardComponent } from './pages/testimonios/testimonios-board/testimonios-board.component';
import { IntroTestimoniosComponent } from './pages/main/intro-testimonios/intro-testimonios.component';
import { IntroFundacionComponent } from './pages/main/intro-fundacion/intro-fundacion.component';
import { ArticlesBoardComponent } from './pages/articles/articles-board/articles-board.component';
import { PublicComponent } from './pages/articles/public/public.component';
import { IntroLupusComponent } from './pages/main/intro-lupus/intro-lupus.component';
import { MaratonComponent } from './pages/maraton/maraton.component';
import { LupusComponent } from './pages/articles/lupus/lupus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogLastEntriesComponent,
    InfoSaludComponent,
    AgendaLastEntriesComponent,
    StatsComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    MainComponent,
    BlogEntryComponent,
    BlogBoardComponent,
    SympthomsComponent,
    CaresComponent,
    HospitalsComponent,
    TestimoniosBoardComponent,
    FundacionComponent,
    IntroTestimoniosComponent,
    IntroFundacionComponent,
    ArticlesBoardComponent,
    PublicComponent,
    IntroLupusComponent,
    MaratonComponent,
    LupusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
