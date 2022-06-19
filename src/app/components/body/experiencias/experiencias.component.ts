import { Component, OnInit } from '@angular/core';
import {EXPERIENCIAS} from '../../../mock-items';
import {experiencia} from '../../../EXPERIENCIAS';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  
  Experiencias: experiencia[] = EXPERIENCIAS;
  constructor() { }

  ngOnInit(): void {
  }

}
