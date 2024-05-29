import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchByIdService } from '../fetch-by-id.service';
import { DeletePersonService } from '../delete-person.service';

@Component({
  selector: 'app-delete-item',
  standalone: true,
  providers: [FetchByIdService, DeletePersonService],
  imports: [],
  templateUrl: './delete-item.component.html',
  styleUrl: './delete-item.component.css'
})
export class DeleteItemComponent {

  id : string = '';
  name : string = '';
  aux : any;
  errorString : string = '';
  givenName : string = '';
  onKey(event: any) {
    this.givenName = event.target.value;
  }
  constructor(private fetchByIdService: FetchByIdService, private deletePersonService: DeletePersonService) {
    //get id from url
    this.id = window.location.href.split('/').pop() || ''; 
    this.getPerson();
  }

  async getPerson() {
    this.aux = await this.fetchByIdService.fetchPersonById(this.id);
    this.name = this.aux['first_name']+' '+this.aux['last_name'];
  }

  public deletePerson() {
    console.log(this.givenName); 
    this.errorString = '';
    if(this.givenName == this.name) {
      this.deletePersonService.deletePersonById(this.id);
      window.location.href = '/index';

    } else {
      this.errorString = 'The name you entered does not match the name of the person you want to delete';
    }
  }


}
