import { Component } from '@angular/core';
import { PostPersonsService } from '../post-persons.service';
import { Location } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent {
    firstName = new FormControl('');
    lastName = new FormControl('');
    email = new FormControl('');
    gender = new FormControl('');
    ipAddress = new FormControl('');

    constructor(private postPersonsService: PostPersonsService, private location: Location) {
    }
    addPerson(){
        this.postPersonsService.postPerson({first_name: this.firstName.value, last_name: this.lastName.value,email: this.email.value,gender: this.gender.value,ip_address: this.ipAddress.value});
    }
}
