import { NgClass, NgFor, NgStyle, NgIf } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // 🔹 Cards Section Data
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

  functionalities = [
    {
      tab: 'Median',
      title: 'Median',
      subtitle: 'Service Bus Lineup',
      desc: 'MEDIAN is a Middleware Processor to connect multiple systems together and Transforms data from one communication channel to another channel like Web service - SOAP/REST,EJB, IBM MQ,etc.',
      img: 'image/dd4b8742ed008c666e45c1148ae519db9c322e66.png', // ✅ place in assets folder
    },
    {
      tab: 'Smart Information & Analytics System',
      title: 'Smart Information & Analytics System',
      subtitle: 'ANALYTICS AND MIS LINEUP',
      desc: 'An intelligent tool to generate automatic reports with ability to do in depth analysis for bank management and operations.',
      img: 'image/information.png',
    },
    {
      tab: 'Revenue Enhancer',
      title: 'Revenue Enhancer',
      subtitle: 'PREDICTIVE LINEUP',
      desc: 'Product which computes and verifies income and expenses in the Core banking system and reports noticeable misbehavior to the bank.',
      img: 'image/revenue.png',
    },
    {
      tab: 'FMoS',
      title: 'FMoS',
      subtitle: 'MONITORING LINEUP',
      desc: 'Powerful system to monitor and identify fraudulent behaviour in banks database and instant reporting in various channels.',
      img: 'image/fmos.png',
    },
    {
      tab: 'Next One',
      title: 'Next One',
      subtitle: 'COMING SOON LINEUP',
      desc: 'An intelligent tool to generate automatic reports with ability to do in depth analysis for bank management and operations.',
      img: 'image/nextone.png',
    },
  ];

  // ✅ Show "Median" first by default
  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
  // ✅ Initialize Swiper after view is ready
  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      modules: [Autoplay],
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 1, // 🔹 no waiting
        disableOnInteraction: false,
      },
      speed: 4000, // 🔹 smooth scrolling speed
      allowTouchMove: false, // 🔹 disable manual dragging
      breakpoints: {
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      },
    });
  }
}
