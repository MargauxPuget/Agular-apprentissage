import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Router } from '@angular/router';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { FaceSnap } from 'src/app/core/models/face-snap.model';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private faceSnapsService: FaceSnapsService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      // le formulaire n'est mis à jour seulement quand l'on change que champ (et  pas à chaque lettre)
      updateOn: 'blur'
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
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe;

  }

}
