import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    this.auth.login();
    // pour une application sercurisé, il faut vérifier que la connexion c'est bien passé !!!
    this.router.navigateByUrl('/facesnaps');
  }
}
