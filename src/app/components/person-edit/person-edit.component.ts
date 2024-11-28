import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-edit',
  standalone: true,
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
  imports: [CommonModule, ReactiveFormsModule], // Import required modules
})
export class PersonEditComponent implements OnInit {
  personForm!: FormGroup;
  personId: string = '';

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personId = this.route.snapshot.params['id'];
    this.personForm = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      mobile: [''],
    });

    if (this.personId) {
      this.personService.getPersonById(this.personId).subscribe((data) => {
        this.personForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      this.personService
        .updatePerson(this.personId, this.personForm.value)
        .subscribe(() => {
          this.router.navigate(['/list']);
        });
    }
  }
}
