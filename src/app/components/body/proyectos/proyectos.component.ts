import { Component, OnInit } from '@angular/core';
import {PROYECTOS} from '../../../mock-items';
import {proyecto} from '../../../PROYECTOS';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  Proyectos: proyecto[] = PROYECTOS;

  constructor() { }

  ngOnInit(): void {
  }

}
