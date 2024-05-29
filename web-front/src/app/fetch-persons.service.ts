import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchPersonsService {

  url = "http://localhost/Web/fetch_persons.php";
  result: Array<any> = [];
  constructor(private http:HttpClient) { 
  }
  //this component needs to fetch a json with all the people from the link http://localhost/Web/fetch_persons.php and display it in a table

  async fetchAllPersons() {
    this.result = [];
    await this.http.get(this.url).forEach(data => {
      this.result.push(data);
    });
    return this.result;
  }

}
