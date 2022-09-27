import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

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

  onSnap(){
    /* this.faceSnapsService
    if ( this.isSnapped ){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, false);
      this.isSnapped = false;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, true);
      this.isSnapped = true;
    } */
  }
}
