import { Component } from '@angular/core';
import { NgClass, NgFor, NgStyle, NgIf } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [NgFor, NgClass, NgStyle, NgIf],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  cards = [
    {
      title: 'Product Customization',
      desc: 'Enhancing the existing version of core banking system to support business...',
      link: '#',
      img: 'image/Mask group.png',
      style: 'linear-gradient(360deg, #E2F5F8 0%, #B0E0E6 100%)',
      hoverText:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
    },
    {
      title: 'Functional Training',
      desc: 'Development and Customization of Reports, Design of IFRS Reports, Designing analytics...',
      link: '#',
      img: 'image/Mask group1.png',
      style: 'linear-gradient(360deg, #D5FFEA 0%, #95D2B3 100%)',
      hoverText:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
    },
    {
      title: 'Reporting and Analytics',
      desc: 'Functional training will disclose the deep details of product functionality to the users...',
      link: '#',
      img: 'image/Mask group2.png',
      style: 'linear-gradient(360deg, #FFF2E6 0%, #FFDAB9 100%)',
      hoverText:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
    },
    {
      title: 'Data Migration, Planning and Strategy',
      desc: 'Data migration planning can be a complicated process, but creating a strategy...',
      link: '#',
      img: 'image/Group.png',
      style: 'linear-gradient(360deg, #F3F0FF 0%, #D4CCFF 100%)',
      hoverText:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
    },
    {
      title: 'Interface Support',
      desc: 'Our Expertise team will help you in all interfacing needs for your day to day banking...',
      link: '#',
      img: 'image/Subtract.png',
      style: 'linear-gradient(360deg, #FFFEDF 0%, #F1EF99 100%)',
      hoverText:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
    },
    {
      title: 'Database and Middleware Support',
      desc: 'Our Expertise team will help you in all interfacing needs for your day to day banking...',
      link: '#',
      img: 'image/Group1.png',
      style: 'linear-gradient(360deg, #F4FFD7 0%, #CEDF9F 100%)',
      hoverText:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
    },
  ];
}
