import { Component } from '@angular/core';

//Componentes
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/ProjectsComponent';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    KnowledgeComponent, 
    ExperiencesComponent,
    ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
