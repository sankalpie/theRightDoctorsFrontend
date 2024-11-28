import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  standalone: true,
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  imports: [CommonModule, RouterModule], // Import required modules
})
export class PersonListComponent implements OnInit {
  people: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPeople().subscribe((data) => {
      this.people = data;
    });
  }
}
