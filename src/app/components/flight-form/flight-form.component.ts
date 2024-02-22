import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FlightService } from '../../shared/flight/flight.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent {
  flightForm: FormGroup;
  constructor(private fb: FormBuilder,private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      airline: ['', [Validators.required]],
      arrivalDate: ['', [Validators.required]],
      arrivalTime: ['', [Validators.required]],
      flightNumber: ['', [Validators.required]],
      numOfGuests: [null, [Validators.required, Validators.min(1)]],
      comments: [''] // Optional field
    });
  }
  
  onSubmit(): void {
    if (this.flightForm.valid) {
      // console.log(this.flightForm.value);

    this.flightService.submitFlightDetails(this.flightForm.value).subscribe({
      next: (response) => {
        // Handle success
        alert('The return result is ' + response)
        console.log('Submission successful', response);
        


      },
      error: (error) => {
        // Handle error
        alert('Things happen: ' + error )
        console.error('Submission failed', error);


      }
    });

    }
  }


}
