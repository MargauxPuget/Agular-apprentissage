import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail: string = 'email';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue(){
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form: NgForm): void {
    // form.value va contenir toutes les valeurs du template form
    console.log(form.value);
  }

}
