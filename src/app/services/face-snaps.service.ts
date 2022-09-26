import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

// ce service doit être injecté à la racine de l'application ainsi au duplicata existe
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] =[
    {
      id: 1,
      title: 'Archidald',
      description: 'Mon meilleur ami depuis toujours!',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 50,
      location: 'la montagne'
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 4
    },
    {
      id: 4,
      title: 'Le chiffre magique',
      description: 'quarante-deux -> 42 !',
      createdDate: new Date(),
      snaps: 42,
      imageUrl: 'https://medias.pourlascience.fr/api/v1/images/view/5e2ecb2f3e45466c67227465/wide_1300/image.jpg'
    },
    {
      id: 5,
      title: 'Un bon repas',
      description: 'Des lasagnes',
      createdDate: new Date(),
      snaps: 20,
      imageUrl: 'https://media.istockphoto.com/photos/meat-lasagna-picture-id543663322?k=20&m=543663322&s=612x612&w=0&h=TzVt9HU-P_Yc-1Z4UUxPrdSAs62eL12j-z3QicA8CGc=',
      location: 'au restaurant'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
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

}
