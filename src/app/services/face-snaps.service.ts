import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators"
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

  getfaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
  }

  // si issnapped est a false alors il n'a jamais était snappé
  snapFaceSnapById(faceSnapId: number, isSnapped: boolean): Observable<FaceSnap> {
    return this.getfaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (isSnapped === true ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
    );
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
