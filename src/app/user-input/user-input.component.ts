import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');

    console.log({ enteredAnnualInvestment: this.enteredAnnualInvestment, enteredDuration: this.enteredDuration, enteredExpectedReturn: this.enteredExpectedReturn, enteredInitialInvestment: this.enteredInitialInvestment });

  }

}
