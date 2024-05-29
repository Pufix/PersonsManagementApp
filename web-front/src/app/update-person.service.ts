import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdatePersonService {

  constructor(private http:HttpClient) {
    console.log('pula');
   }

  updatePerson(person: any){
    let url = "http://localhost/Web/update_person.php?id=" + person.id + "&first_name=" + person.first_name + "&last_name=" + person.last_name + "&email=" + person.email + "&gender=" + person.gender + "&ip_address=" + person.ip_address;
    fetch(url);
    window.location.href = '/index';
  }
}
