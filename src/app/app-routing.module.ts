import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";


// tableau des routes racines de l'application
const routes: Routes = [
  //les routes qui commence par 'facesnaps' ne sont a charger que si nécéssaire et c'est 'FaceSnapsModule' qui se débrouille
  { path : 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule) },
  { path : '', component: LandingPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
