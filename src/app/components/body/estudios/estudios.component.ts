import { Component, OnInit, Input } from '@angular/core';
import {ESTUDIOS} from '../../../mock-items';
import {estudio} from '../../../ESTUDIOS';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  
  Estudios: estudio[] = ESTUDIOS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
