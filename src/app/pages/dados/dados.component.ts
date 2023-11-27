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
  conceitual: number = 0;
  checkpoints: number = 0;
  pratica: number = 0;

  constructor(
    private router: Router,
    private formularioService: FormularioService
  ) {}

  onSubmit() {
    const dadosFormulario = {
      conceitual: this.conceitual,
      checkpoints: this.checkpoints,
      pratica: this.pratica,
    };

    this.formularioService.salvarFormulario(dadosFormulario);

    this.router.navigate(['/home']);
  }
}
