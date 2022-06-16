import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre:string="Diego Nahuel Amezaga";
  titulo:string="(Programador FullStack)"

  constructor() { }

  ngOnInit(): void {
  }

}
