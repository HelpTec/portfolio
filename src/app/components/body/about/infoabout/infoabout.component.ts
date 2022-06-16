import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoabout',
  templateUrl: './infoabout.component.html',
  styleUrls: ['./infoabout.component.css']
})
export class InfoaboutComponent implements OnInit {
  infoabout:string="informacion sobre mi perfil mucho texto mucho texto mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto  mucho texto "

  constructor() { }

  ngOnInit(): void {
  }

}
