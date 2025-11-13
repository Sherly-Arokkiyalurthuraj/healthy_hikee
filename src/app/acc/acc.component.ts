import { Component, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-acc',
  standalone: true,
  imports: [],
  templateUrl: './acc.component.html',
  styleUrl: './acc.component.css'
})
export class AccComponent implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const genderInput = document.getElementById('gender') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
    const form = document.getElementById('signupForm') as HTMLFormElement;

    const validateInputs = () => {
      if (
        usernameInput.value.trim() &&
        emailInput.value.trim() &&
        ageInput.value.trim() &&
        genderInput.value.trim() &&
        passwordInput.value.trim()
      ) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    };

    usernameInput.addEventListener('input', validateInputs);
    emailInput.addEventListener('input', validateInputs);
    ageInput.addEventListener('input', validateInputs);
    genderInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting the default way

      if (submitButton.disabled) {
        alert('Please fill out all fields.');
      } else {
        alert('Registration to healthy Hike was successful!');
        this.router.navigate(['/home']);
      }
    });
  }
}
