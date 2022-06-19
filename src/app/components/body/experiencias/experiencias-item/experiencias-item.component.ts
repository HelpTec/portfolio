import { Component, OnInit, Input } from '@angular/core';
import {EXPERIENCIAS} from '../../../../mock-items';
import {experiencia} from '../../../../EXPERIENCIAS';

@Component({
  selector: 'app-experiencias-item',
  templateUrl: './experiencias-item.component.html',
  styleUrls: ['./experiencias-item.component.css']
})
export class ExperienciasItemComponent implements OnInit {

  @Input() experiencia: experiencia = EXPERIENCIAS[0]
  constructor() { }

  ngOnInit(): void {
  }

}
