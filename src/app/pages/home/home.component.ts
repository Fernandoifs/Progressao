// home.component.ts
import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  conceitual: string = '';
  checkpoints: string = '';
  pratica: string = '';

  constructor(private formularioService: FormularioService) {}

  ngOnInit(): void {
    this.conceitual = this.formularioService.getConceitual();
    this.checkpoints = this.formularioService.getCheckpoints();
    this.pratica = this.formularioService.getPratica();
  }
}
