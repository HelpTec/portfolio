import { Component, OnInit, Input } from '@angular/core';
import {PROYECTOS} from '../../../../mock-items';
import {proyecto} from '../../../../PROYECTOS';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {

  @Input() proyecto: proyecto = PROYECTOS[0]

  constructor() { }

  ngOnInit(): void {
  }

}
