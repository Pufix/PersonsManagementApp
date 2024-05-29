import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchByIdService {
  result: Array<any> = [];
  //http://localhost/Web/select_person_byId.php?id=ecec0979-b390-4107-8b39-25a259bdbcd0
  url = "http://localhost/Web/select_person_byId.php?id=";
  constructor(private http:HttpClient) { }

  async fetchPersonById(id : string) {
    this.result = [];
    await this.http.get(this.url + id).forEach(data => {
      this.result.push(data);
    });
    return this.result[0]['0'];
  } 
}
