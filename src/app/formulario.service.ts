import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private formularioData: any;

  constructor() {}

  salvarFormulario(formData: any) {
    this.formularioData = formData;
  }

  getFormulario(): any {
    return this.formularioData;
  }
}
