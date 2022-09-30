import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path : 'auth/login', component: LoginComponent }
]

@NgModule ({
  imports: [
    // le .forChild permet d'ajouter (et non d'écraser) des routes à l'application
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule {}
