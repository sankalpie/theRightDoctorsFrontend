import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-delete',
  standalone: true,
  templateUrl: './person-delete.component.html',
  imports: [],
})
export class PersonDeleteComponent implements OnInit {
  personId: string = '';
  personName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {
    this.personId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // Fetch the person's data to confirm deletion
    if (this.personId) {
      this.personService.getPersonById(this.personId).subscribe((data) => {
        this.personName = data.name; // Fetch the name or other identifying detail
      });
    }
  }

  deletePerson(): void {
    this.personService.deletePerson(this.personId).subscribe(() => {
      this.router.navigate(['/list']); // Redirect to the list view after deletion
    });
  }

  cancel(): void {
    this.router.navigate(['/list']); // Cancel and navigate back to the list view
  }
}
