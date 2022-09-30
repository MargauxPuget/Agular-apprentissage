import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  isSnapped!: boolean;

  constructor(private faceSnapsService : FaceSnapsService,
              private router: Router){}

  ngOnInit() {
    this.isSnapped = false;
  }

  onSnap(){
    this.faceSnapsService
    if ( this.isSnapped ){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, false);
      this.isSnapped = false;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, true);
      this.isSnapped = true;
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
