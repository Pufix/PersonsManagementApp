import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostPersonsService {


  constructor() { }
  postPerson(person: any) {
    //http://localhost/Web/add_person.php?first_name=da&last_name=da&email=da&gender=da&ip_address=da
    let url = "http://localhost/Web/add_person.php?first_name=" + person.first_name + "&last_name=" + person.last_name + "&email=" + person.email + "&gender=" + person.gender + "&ip_address=" + person.ip_address;
    fetch(url);
    

  }
}
