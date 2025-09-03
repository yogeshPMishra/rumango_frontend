import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor,NgClass,NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   cards = [
    {
      title: 'Product Customization',
      desc: 'Enhancing the existing version of core banking system to support business...',
      link: '#',
      img: 'image/Mask group.png',
      bg: 'bg-gray-800 text-white',
      style : 'linear-gradient(360deg, #E2F5F8 0%, #B0E0E6 100%)'
 // no bg color in original card
    },
    {
      title: 'Functional Training',
      desc: 'Development and Customization of Reports, Design of IFRS Reports, Designing analytics...',
      link: '#',
      img: 'image/Mask group1.png',
      bg: 'bg-green-500 text-white',
      style : 'linear-gradient(360deg, #D5FFEA 0%, #95D2B3 100%)'
    },
    {
      title: 'Reporting and Analytics',
      desc: 'Functional training will disclose the deep details of product functionality to the users...',
      link: '#',
      img: 'image/Mask group2.png',
      bg: 'bg-orange-500 text-white',
      style: 'linear-gradient(360deg, #FFF2E6 0%, #FFDAB9 100%)'
    },
    {
      title: 'Data Migration, Planning and Strategy',
      desc: 'Data migration planning can be a complicated process, but creating a strategy...',
      link: '#',
      img: 'image/Group.png',
      bg: 'bg-purple-500 text-white',
      style: 'linear-gradient(360deg, #F3F0FF 0%, #D4CCFF 100%)'

    },
    {
      title: 'Interface Support',
      desc: 'Our Expertise team will help you in all interfacing needs for your day to day banking...',
      link: '#',
      img: 'image/Subtract.png',
      bg: 'bg-yellow-500 text-black',
      style: 'linear-gradient(360deg, #FFFEDF 0%, #F1EF99 100%)'
    },
    {
      title: 'Database and Middleware Support',
      desc: 'Our Expertise team will help you in all interfacing needs for your day to day banking...',
      link: '#',
      img: 'image/Group1.png',
      bg: 'bg-teal-500 text-white',
      style : 'linear-gradient(360deg, #F4FFD7 0%, #CEDF9F 100%)'
    },
  ];
}
