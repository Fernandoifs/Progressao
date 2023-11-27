// home.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormularioService } from 'src/app/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  formulario: any;

  constructor(private formularioService: FormularioService) { }
 
  ngOnInit() {
    this.formulario = this.formularioService.getFormulario();
  }
}
