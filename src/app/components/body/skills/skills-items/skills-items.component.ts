import { Component, OnInit, Input } from '@angular/core';
import {SKILLS} from '../../../../mock-items';
import {skill} from '../../../../SKILLS';

@Component({
  selector: 'app-skills-items',
  templateUrl: './skills-items.component.html',
  styleUrls: ['./skills-items.component.css']
})
export class SkillsItemsComponent implements OnInit {
  
  @Input() skill: skill = SKILLS[0]

  constructor() { }

  ngOnInit(): void {
  }

}
