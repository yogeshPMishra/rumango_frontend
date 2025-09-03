import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AosService } from './services/aos.service';


@Component({
  selector: 'app-root',
  standalone: true, // ✅ since you’re using imports
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rumango';

  constructor(private aosService: AosService) {}

  ngOnInit(): void {
    this.aosService.initAos();
  }
}
