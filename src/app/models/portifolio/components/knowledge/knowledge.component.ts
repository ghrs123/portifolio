import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public  arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícones de conhecimento do angular',
    },
    {
      src: 'assets/icons/knowledge/java1.svg',
      alt: 'Ícones de conhecimento do java',
    },
    {
      src: 'assets/icons/knowledge/spring-boot1.svg',
      alt: 'Ícones de conhecimento do spring-boot',
    },
    {
      src: 'assets/icons/knowledge/sql1.svg',
      alt: 'Ícones de conhecimento do sql',
    },
    {
      src: 'assets/icons/knowledge/junit.svg',
      alt: 'Ícones de conhecimento do junit5',
    },
    {
      src: 'assets/icons/knowledge/docker1.svg',
      alt: 'Ícones de conhecimento do docker',
    },
    {
      src: 'assets/icons/knowledge/jenkins1.svg',
      alt: 'Ícones de conhecimento do jenkins',
    },
  ]);
}
