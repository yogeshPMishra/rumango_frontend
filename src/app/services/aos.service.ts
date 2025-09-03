import { Injectable } from '@angular/core';
import AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AosService {
  initAos() {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out',
      once: true, // whether animation should happen only once
    });
  }

  refresh() {
    AOS.refresh();
  }
}
