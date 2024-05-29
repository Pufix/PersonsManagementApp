import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { FilteredFetchPersonsService } from '../filtered-fetch-persons.service';

@Component({
  selector: 'app-filtered-person-table',
  standalone: true,
  providers: [FilteredFetchPersonsService],
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './filtered-person-table.component.html',
  styleUrl: './filtered-person-table.component.css'
})
export class FilteredPersonTableComponent {

  str = '';
  persons: any;
  onKey(event :any) {
    this.str = event.target.value;
  }
  constructor(private fetchPersonsService: FilteredFetchPersonsService) {
    //get str from url
    this.str = window.location.href.split('/').pop() || '';
    if (this.str == 'filtered_see_all') {
      this.str = '';
    }
    this.getPersons();
  }
  async getPersons() {
    this.persons =  await this.fetchPersonsService.fetchFilteredPersons(this.str);
  }
  reload(){
    //reload the page with the new str
    window.location.href = 'filtered_see_all/' + this.str;

  }
  






}
