// formulario.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private conceitual: string = '';
  private checkpoints: string = '';
  private pratica: string = '';

  setConceitual(value: string): void {
    this.conceitual = value;
  }

  getConceitual(): string {
    return this.conceitual;
  }

  setCheckpoints(value: string): void {
    this.checkpoints = value;
  }

  getCheckpoints(): string {
    return this.checkpoints;
  }

  setPratica(value: string): void {
    this.pratica = value;
  }

  getPratica(): string {
    return this.pratica;
  }
}
