import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { CommonModule } from '@angular/common';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/ticket1.png',
      alt: 'Project Ticket System',
      title: 'Ticket System',
      width: '100%',
      height: '100%',
      description: '<p>Ticket Management API: the solution to simplify and improve customer support.</p>',
      links: [
        {
          name: 'Open the project',
          href: 'https://github.com/ghrs123/ticket-system-api'
        }
      ]
    },
    {
      src: 'assets/img/projects/pokedex1.png',
      alt: 'Project Pokedex',
      title: 'Pokedex',
      width: '100%',
      height: '100%',
      description: '<p>Pokedex: your definitive tool for exploring and discovering the fascinating world of Pokémon.'
      + ' With a vast collection of information about every known Pokémon, our app offers comprehensive details, statistics and images to '
      + 'help you become a true Pokémon Master.</p>',
      links: [
        {
          name: 'Open the project',
          href: 'https://ghrs123.github.io/pokedex/'
        }
      ]
    },
    {
      src: 'assets/img/projects/ToDoList1.png',
      alt: 'Project To do List',
      title: 'To do List',
      width: '100%',
      height: '100%',
      description: '<p>To-Do List: a simple and intuitive tool to help you organize your daily tasks.</p>',
      links: [
        {
          name: 'Open the project',
          href: 'https://ghrs123.github.io/app-todo/'
        }
      ]
    }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
