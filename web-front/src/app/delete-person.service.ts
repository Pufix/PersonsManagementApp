import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletePersonService {
  //http://localhost/Web/delete_person.php?id=dcf93454-62f9-4b69-9521-216f8fb4b1d1
  url = "http://localhost/Web/delete_person.php?id=";

  constructor(private http:HttpClient) { }

  async deletePersonById(id : string){
    await this.http.get(this.url + id).forEach(data => {
      console.log(data);
    });  
  }
}
