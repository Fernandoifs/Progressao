import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  conceitual: string = '';
  checkpoints: string = '';
  pratica: string = '';
}
