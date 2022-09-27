import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
    });
    // valueChanges est un observable qui emet tout l'objet du formGroup à chaque fois une valeur change
    // snapform n'est pas de type facesnap il faut donc lui ajouter les champs nécéssaire avec un .pipe puis un map()
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
  }

}
