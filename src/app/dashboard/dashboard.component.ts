import { Component,AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    const heightInput = document.getElementById('height') as HTMLInputElement;
    const weightInput = document.getElementById('weight') as HTMLInputElement;
    const calculateButton = document.getElementById('calculateButton') as HTMLButtonElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;

    calculateButton.addEventListener('click', () => {
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = 'Please enter valid weight and height.';
        resultDiv.className = 'error';
      } else {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        let message = '';
        let resultClass = '';
        if (bmi < 18.5) {
          message = `Underweight: ${bmi.toFixed(2)}`;
          resultClass='underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
          message = `Normal weight: ${bmi.toFixed(2)}`;
          resultClass='Normalweight';
        } else if (bmi >= 25 && bmi < 29.9){
          message = `Overweight: ${bmi.toFixed(2)}`;
        resultClass='overweight';
        }
        else {
          message = `Obese: ${bmi.toFixed(2)}`;
        resultClass='obese';
        }

        resultDiv.innerHTML = `<h4 >YOUR BMI: ${bmi.toFixed(2)}</h4><h5>${message}</h5>`;
        resultDiv.className=resultClass;
      }
    });
  }
}
