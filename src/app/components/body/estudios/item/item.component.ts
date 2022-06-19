import { Component, OnInit, Input } from '@angular/core';
import {ESTUDIOS} from '../../../../mock-items';
import {estudio} from '../../../../ESTUDIOS';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() estudio: estudio = ESTUDIOS[0]
  constructor() { }

  ngOnInit(): void {
  }

}
