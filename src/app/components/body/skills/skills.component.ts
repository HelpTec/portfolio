import { Component, OnInit } from '@angular/core';
import {SKILLS} from '../../../mock-items';
import {Skill} from '../../../SKILLS';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
