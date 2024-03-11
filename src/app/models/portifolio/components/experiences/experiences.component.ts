import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        date$: 'Java Developer',
        p:'Quantico Solutions - Octuber/2022 - Current',
      },
      text: '<p><strong>Adp Valor - Águas de Portugal</strong></p>'
      + '<p> -Corrective and evolutionary maintenance in frontend and backend</p>'
      + '<p> -Tasks managment'
      + '<p> Technologies used: Angular14, Quakus, Azure, MySql database</p>'
      + '<p><strong>Ministry of Education - Registration Portal</strong></p>'
      + '<p> - Development of new Features</p>'
      + '<p> - Corrective and Evolutionary Maintenance</p>'
      + '<p>  Technologies used: Angular 10, Thorntail framework (microservices - just maintenance)'
      + 'Jira, GitLab, Oracle Database, Microprofile, Jenkins(just to generate images)'
      + 'Rancher(Kubernet menager - just deploy)</p>'
      + '<p><strong>DGE - Directorate-General for Education</strong></p>'
      + '<p>  - Corrective and Evolutionary Maintenance</p>'
      + '<p>  - Responsible for the analysis of the application of the new features</p>'
      + '<p> Technologies used: GitLab, SpringBoot(api’s), spring MVC and Thymeleaf for front'
      + 'SpringSecurity, Oracle Database, Jira</p>'
      + '<p><strong>DGE - Directorate-General for Education</strong></p>'
      + '<p>  - Corrective and Evolutionary Maintenance</p>'
      + '<p>  - Responsible for the analysis of the application of the new features</p>'
      + '<p> Technologies used: GitLab, SpringBoot(api’s), spring MVC and Thymeleaf for front'
      + 'SpringSecurity, Oracle Database, Jira</p>'
    },
    {
      summary: {
        date$: 'Junior Java Developer',
        p: 'Lorius Solution - Septemberr/2022 - Current',
      },
      text: '<p>Development of ticket management application</p>'

      + '<p> - Creation of the ER model </p>'
      + '<p> - ER Diagram'
      + '<p> - Creation of databases (mysql)</p>'
      + '<p> - Structuring of back-end and front-end applications</p>'
      + '<p> - Back-end and front-end development</p>'
      + '<p> - Corrective and Evolutionary Maintenance</p>'
      + '<p> Technologies used: Spring Boot, Spring Data JPA, Spring Security, Angular, MySQL, CI/CD, REST, Angular, Swagger, gitlab , Jira, Confluence, JUnit</p>'
    },
    {
      summary: {
        date$: 'Junior Java Developer',
        p: 'CGI Portugal -  Feb/2022 - Oct/2022',
      },
      text: '<p>Development of ticket management application</p>'

      + '<p><strong> CGI Portugal - CV management</strong></p>'
      + '<p> Development of internal application for curriculum management and employee information.</p>'
      + '<p> - Requirements assessment, documentation and mockup of the application'
      + '<p> - Creation of ER model (drawio)</p>'
      + '<p> - ER diagram (mysql) </p>'
      + '<p> - Database creation (mysql)</p>'
      + '<p> - Structuring the back-end application with Standard Repository</p>'
      + '<p> - Back-end development</p>'
      + '<p>  Technologies used: Spring Boot, Spring Data JPA, HTML, CSS, bootstrap, Angular, github, mysql'
      + ' Unified Modeling Language (UML), Spring Framework and +3 skills</p>'
      + '<p><strong>ANSR- National Road Safety Authority</strong></p>'
      + '<p>Responsible for the documentation of webservices integrated in'
      + ' against-ordination management used in ANSR such as, SIGA.</p>'
      + '<p> - Versioning with SVN</p>'
      + '<p> - Tests on soapUI</p>'
      + '<p> - Data management in SQL Server</p>'
      + '<p> - Creation of Macros in VBA</p>'
      + '<p> - Creation of data dictionary</p>'
      + '<p> Technologies used: SQL Server, Eclipse, SVN, SoapUI'
      + ' Spring Framework, Java Development</p>'
    },
    {

      summary: {
        date$: 'RPA DeveloperRPA Developer',
        p: 'CGI Portugal -  Oct/2021 - Dec/2021',
      },
      text: '<p><strong>BPI Bank </strong></p>'
      + '<p> - Analysis, Project Development, Tests in automation RPA’s applied to multiple systems.</p>'
      + '<p> - Maintenance and improvement of applications'
      + '<p> - Good practice</p>'
      + '<p> - Monitoring logs</p>'
      + '<p> Technologies used: Uipath, Uipath Orquestrator, SQLServer</p>'
      + '<p><strong>Caixa Geral de Depósitos Bank </strong></p>'
      + '<p>  As an intern I had the opportunity to learn about RPA Robotics Process Automation where I acquired knowledge and experience when working with the Uipath tool.</p>'
      + '<p> - Development of Development Specifications Document (DSD).'
      + '<p> - Automation with the need to use Orchestrator.</p>'
      + '<p> - Implementation of good practices in development and working environment.</p>'   
      + '<p> Technologies used: Uipath, Uipath Orquestrator</p>'
    }
  ]);
}
