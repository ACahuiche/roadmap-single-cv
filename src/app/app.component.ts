import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface Education {
  schoolName: string;
  career: string;
  initialDate: string;
  endDate: string;
  body: string;
}

export interface Experience {
  company: string;
  country: string;
  position: string;
  initialDate: string;
  endDate: string;
  achievements: string[];
  skillsLearned: string[];
}

export interface SocialLink {
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Alberto Cahuiche';
  position: string = 'Junior Frontend Developer';
  city: string = 'Monterrey, NL';
  phone: string = '(811)1234567';
  email: string = 'no_reply@example.com';
  skills: string = 'HTML, CSS, Javascript, MySQL, MongoDB, Angular, NodeJS';

  education: Education[] = [
    {
      schoolName: 'ITCM',
      career: 'Computer systems engineer',
      initialDate: 'Jun 2007',
      endDate: 'Aug 2013',
      body: ''
    }
  ];

  experience: Experience[] = [{
    company: 'Devtam',
    country: 'Mexico',
    position: 'Backend Developer',
    initialDate: 'Jun 2020',
    endDate: 'Aug 2022',
    achievements: [
      'Creation of web services and APIs using Node.js and Express'
    ],
    skillsLearned: [
      'NodeJS',
      'Express',
      'MySQL',
      'MongoDB'
    ]
  },
  {
    company: 'Devtam',
    country: 'Mexico',
    position: 'Freelance Frontend Developer',
    initialDate: 'Jun 2018',
    endDate: 'Aug 2020',
    achievements: [
      'Frontend development of web applications',
      'Creation of interfaces and communication with APIs'
    ],
    skillsLearned: [
      'Angular'
    ]
  }];

  socialLinks: SocialLink[] = [{
    url: 'https://github.com/Acahuiche'
  },
  {
    url: 'https://twitter.com/cahuichealberto'
  }]
}
