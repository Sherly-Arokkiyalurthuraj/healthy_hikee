import { Component , AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {
  constructor(private router: Router) {}
  ngAfterViewInit() {
    // Access the DOM elements
    const usernameInput = document.getElementById('first') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;

    // Function to validate inputs and enable/disable the submit button
    const validateInputs = () => {
      if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    };

    // Event listeners to validate inputs as user types
    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    // Handle form submission
    document.getElementById('loginForm')?.addEventListener('submit', (event) => {
      if (submitButton.disabled) {
        event.preventDefault();
        console.log('Submit button is disabled.'); // Log message
        alert('Please fill out all fields.');
      } else {
        event.preventDefault();
        this.router.navigate(['/home']);
      }
      // You can add additional logic here for form submission, such as sending data to a server
    });
  }
}