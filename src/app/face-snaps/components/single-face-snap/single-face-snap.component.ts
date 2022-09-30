import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, exhaustMap } from 'rxjs/operators';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  isSnapped!: boolean;

  constructor(private faceSnapsService : FaceSnapsService,
              private route: ActivatedRoute){}

  ngOnInit() {
    this.isSnapped = false;
    // récupération des informations de l'url
    // le '+' permet de transformer en number ce que l'on récupère de l'url
    const facesnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getfaceSnapById(facesnapId);
  }

  onSnap(faceSnapId : number){
    this.faceSnapsService
    if ( this.isSnapped ){
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, false).pipe(
        tap(() => this.isSnapped = false)
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, true).pipe(
        tap(() => this.isSnapped = true)
      );
    }
  }
}
