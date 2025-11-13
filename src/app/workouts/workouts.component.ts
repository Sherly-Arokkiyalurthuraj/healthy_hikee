import { Component, OnInit, AfterViewInit  } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css'
})
export class WorkoutsComponent implements  OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Ensure Bootstrap is loaded correctly
    if (typeof bootstrap !== 'undefined') {
      // Code to initialize Bootstrap components
    }
  }
}