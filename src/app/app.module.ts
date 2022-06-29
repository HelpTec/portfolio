import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyComponent } from './components/body/body/body.component';
import { SkillsComponent } from './components/body/skills/skills.component';
import { SkillsItemsComponent } from './components/body/skills/skills-items/skills-items.component';
import { ExperienciasComponent } from './components/body/experiencias/experiencias.component';
import { ExperienciasItemComponent } from './components/body/experiencias/experiencias-item/experiencias-item.component';
import { EstudiosComponent } from './components/body/estudios/estudios.component';
import { ItemComponent } from './components/body/estudios/item/item.component';
import { AboutComponent } from './components/body/about/about.component';
import { PerfilComponent } from './components/body/about/perfil/perfil.component';
import { InfoaboutComponent } from './components/body/about/infoabout/infoabout.component';
import { ProyectosComponent } from './components/body/proyectos/proyectos.component';
import { ProyectosItemComponent } from './components/body/proyects/proyectos-item/proyectos-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BannerComponent,
    BodyComponent,
    SkillsComponent,
    SkillsItemsComponent,
    ExperienciasComponent,
    ExperienciasItemComponent,
    EstudiosComponent,
    ItemComponent,
    AboutComponent,
    PerfilComponent,
    InfoaboutComponent,
    ProyectosComponent,
    ProyectosItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
