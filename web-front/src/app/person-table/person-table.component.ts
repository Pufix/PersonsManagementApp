import { Component } from '@angular/core';
import { FetchPersonsService } from '../fetch-persons.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-person-table',
  standalone: true,
  providers: [FetchPersonsService],
  imports: [NgFor],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  
  persons: any;
  aux: any;
  constructor(private fetchPersonsService: FetchPersonsService) {
    this.persons = [];
    this.getPersons();
    console.log(this.persons);
  }
  async getPersons() {
    this.persons = await this.fetchPersonsService.fetchAllPersons();
    
  }

  public deletePerson(id: string) {
    console.log(id);
    //http://localhost:4200/delete_person/ecec0979-b390-4107-8b39-25a259bdbcd0
    window.location.href = '/delete_person/' + id;
  }

  publupdatePerson(id: string) {}






}
