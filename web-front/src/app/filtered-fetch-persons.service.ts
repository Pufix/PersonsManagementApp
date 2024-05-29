import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteredFetchPersonsService {

  result: Array<any> = [];
  url = "http://localhost/Web/filter_persons.php?name_part=";
  constructor(private http:HttpClient) { }

  fetchFilteredPersons(name_part: string) {
    this.result = [];
    this.http.get(this.url + name_part).forEach(data => {
      this.result.push(data);
    });
    return this.result;

  }
}
