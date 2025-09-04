import { NgClass, NgFor, NgStyle, NgIf } from '@angular/common';
import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

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
  @ViewChildren('avatarEl') avatarEls!: QueryList<ElementRef>;

  swiper!: Swiper;
  projectCounter: number = 0;
  countryCounter: number = 0;
  deliveryCounter: number = 0;
  bankingCounter: number = 0;
  activeIndex = 0;
  swiperActiveIndex = 0;
  avatars: any = [];

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

  clients = [
    { src: 'image/customer1.png', alt: 'Client 1', link: '' },
    { src: 'image/customer2.png', alt: 'Client 2', link: '' },
    { src: 'image/customer3.png', alt: 'Client 3', link: '' },
    { src: 'image/customer4.png', alt: 'Client 4', link: '' },
    { src: 'image/customer5.png', alt: 'Client 5', link: '' },
    { src: 'image/customer5.png', alt: 'Client 5', link: '' },
  ];

  testimonials = [
    {
      rating: 5,
      review:
        "No Other Ecommerce Platform Allows People To Start For Free And Grow Their Store As Their Business Grows. More Importantly, It Doesn't Charge You A Portion Of Your Profits As Your Business Grows!",
      image: 'image/testimonial1.png',
      name: 'Sarah Mitchell',
      role: 'Marketing Director',
      company: 'ABC Corp',
      date: '2025-09-04',
    },
    {
      rating: 4,
      review:
        'Great customer support and easy setup. My business scaled without worrying about hidden costs!',
      image: 'image/testimonial2.png',
      name: 'John Carter',
      role: 'Startup Founder',
      company: 'TechStart',
      date: '2025-09-01',
    },
    {
      rating: 5,
      review:
        'This platform gives me full control over my store while keeping costs transparent. Highly recommend!',
      image: 'image/testimonial3.png',
      name: 'Emily Davis',
      role: 'Ecommerce Consultant',
      company: 'ConsultPro',
      date: '2025-08-28',
    },
    {
      rating: 5,
      review:
        'I was able to launch my store quickly and focus on sales instead of dealing with complicated setups.',
      image: 'image/testimonial4.png',
      name: 'Michael Lee',
      role: 'Small Business Owner',
      company: 'Lee Crafts',
      date: '2025-08-25',
    },
    {
      rating: 4,
      review:
        'The flexibility and scalability helped me expand my product range without extra costs.',
      image: 'image/testimonial5.png',
      name: 'Anna Rodriguez',
      role: 'Entrepreneur',
      company: 'Rodriguez Designs',
      date: '2025-08-20',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.avatars = [...this.testimonials];
    this.animateCounter('projectCounter', 0, 71, 2000);
    this.animateCounter('countryCounter', 50, 11, 2000);
    this.animateCounter('deliveryCounter', 0, 100, 2000);
    this.animateCounter('bankingCounter', 0, 12, 2000);
  }

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

    this.swiper = new Swiper('.testimonialSwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 600,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: () => {
          // Use arrow fn so "this" = Angular component
          this.swiperActiveIndex = this.swiper?.realIndex;
          this.shuffleAvatars();
        },
      },
    });

    document
      .querySelector('.swiper-button-next')
      ?.addEventListener('click', () => {
        this.swiper.slideNext();
      });
    document
      .querySelector('.swiper-button-prev')
      ?.addEventListener('click', () => {
        this.swiper.slidePrev();
      });
  }
  setActive(index: number) {
    this.activeIndex = index;
  }

  swapAvatars(i: number, j: number) {
    const els = this.avatarEls.toArray();
    const el1 = els[i].nativeElement;
    const el2 = els[j].nativeElement;

    // First positions
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    // Swap avatars in array
    [this.avatars[i], this.avatars[j]] = [this.avatars[j], this.avatars[i]];

    this.cdr.detectChanges(); // ✅ use cdr instead of cd

    // New positions
    const newRect1 = el1.getBoundingClientRect();
    const newRect2 = el2.getBoundingClientRect();

    // Invert delta
    const dx1 = rect1.left - newRect1.left;
    const dx2 = rect2.left - newRect2.left;

    el1.style.transform = `translateX(${dx1}px)`;
    el2.style.transform = `translateX(${dx2}px)`;

    requestAnimationFrame(() => {
      el1.classList.add('swap-animate');
      el2.classList.add('swap-animate');
      el1.style.transform = '';
      el2.style.transform = '';
    });

    el1.addEventListener(
      'transitionend',
      () => el1.classList.remove('swap-animate'),
      { once: true }
    );
    el2.addEventListener(
      'transitionend',
      () => el2.classList.remove('swap-animate'),
      { once: true }
    );
  }

  shuffleAvatars() {
    if (this.avatars.length < 2) return;

    const i = Math.floor(Math.random() * this.avatars.length);
    let j = Math.floor(Math.random() * this.avatars.length);
    while (j === i) j = Math.floor(Math.random() * this.avatars.length);

    this.swapAvatars(i, j);
  }

  animateCounter(
    variable: keyof HomeComponent,
    start: number,
    end: number,
    duration: number
  ) {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // update the chosen variable dynamically
      (this as any)[variable] = Math.floor(progress * (end - start) + start);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
