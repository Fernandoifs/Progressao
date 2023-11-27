// home.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  conceitual!: number;
  checkpoints!: number;
  pratica!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const conceitualParam = this.route.snapshot.queryParamMap.get('conceitual');
    const checkpointsParam = this.route.snapshot.queryParamMap.get('checkpoints');
    const praticaParam = this.route.snapshot.queryParamMap.get('pratica');

    this.conceitual = conceitualParam !== null ? +conceitualParam : 0;
    this.checkpoints = checkpointsParam !== null ? +checkpointsParam : 0;
    this.pratica = praticaParam !== null ? +praticaParam : 0;
  }
}
