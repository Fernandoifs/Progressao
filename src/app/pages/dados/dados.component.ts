// dados.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  conceitual: number = 0;
  checkpoints: number = 0;
  pratica: number = 0;

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/home'], {
      queryParams: {
        conceitual: this.conceitual,
        checkpoints: this.checkpoints,
        pratica: this.pratica
      }
    });
  }
}
