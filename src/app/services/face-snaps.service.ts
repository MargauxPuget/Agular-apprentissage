import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

// ce service doit être injecté à la racine de l'application ainsi au duplicata existe
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient){}

  faceSnaps: FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getfaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    }else{
      return faceSnap;
    }
  }

  // si issnapped est a false alors il n'a jamais était snappé
  snapFaceSnapById(faceSnapId: number, isSnapped: boolean): void {
    const faceSnap = this.getfaceSnapById(faceSnapId);
    isSnapped ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  // ajouter un facesnap
  addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void {
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.faceSnaps[this.faceSnaps.length-1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }

}
