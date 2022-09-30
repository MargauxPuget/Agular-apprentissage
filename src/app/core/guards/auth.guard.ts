import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService,
              private router: Router) {}

  // cette fonction permet de vérifier si le token existe dans ce cas elle return true sinon elle redirige vers la page de login et return false.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.auth.getToken()){
      return true;
    } else {
      this.router.navigateByUrl('auth/login');
      return false;
    }

  }
}
