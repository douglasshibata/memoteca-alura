import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  year: number = 2022;
  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
