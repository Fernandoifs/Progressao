// dados.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/formulario.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css'],
})
export class DadosComponent {
  conceitual: string = '';
  checkpoints: string = '';
  pratica: string = '';

  constructor(
    private formularioService: FormularioService,
    private router: Router
  ) {}

  enviarFormulario(): void {
    console.log(this.conceitual);
    console.log(this.checkpoints);
    console.log(this.pratica);

    this.formularioService.setConceitual(this.conceitual);
    this.formularioService.setCheckpoints(this.checkpoints);
    this.formularioService.setPratica(this.pratica);
    this.router.navigate(['/home']);
  }
}
