import { Component } from '@angular/core';
import { UpdatePersonService } from '../update-person.service';
import { FetchByIdService } from '../fetch-by-id.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-persons',
  standalone: true,
  providers: [UpdatePersonService,FetchByIdService],
  imports: [ReactiveFormsModule],
  templateUrl: './update-persons.component.html',
  styleUrl: './update-persons.component.css'
})
export class UpdatePersonsComponent {
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  gender = new FormControl('');
  ipAddress = new FormControl('');
  id : any;
  peep: any;

  constructor(private updatePersonServ: UpdatePersonService, private fetchByIdService: FetchByIdService) {
    //http://localhost:4200/update_person/aa024b66-9d0f-4309-a761-bf69f8d001b9
    this.id = window.location.href.split('/').pop();
    this.fetchPeep();
  }

  async fetchPeep() {
    this.peep = await this.fetchByIdService.fetchPersonById(this.id);
    this.firstName.setValue(this.peep['first_name']);
    this.lastName.setValue(this.peep['last_name']);
    this.email.setValue(this.peep['email']);
    this.gender.setValue(this.peep['gender']);
    this.ipAddress.setValue(this.peep['ip_address']);
  }

  addPerson() {
    this.updatePersonServ.updatePerson({
      id: this.id,
      first_name: this.firstName.value,
      last_name: this.lastName.value,
      email: this.email.value,
      gender: this.gender.value,
      ip_address: this.ipAddress.value
    });
  }

}
