import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from '@angular/router';
import { PersonTableComponent } from './person-table/person-table.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [Router],
    imports: [RouterOutlet,  HttpClientModule, NavbarComponent, PersonTableComponent]
})
export class AppComponent {
  title = 'web-front';
}





