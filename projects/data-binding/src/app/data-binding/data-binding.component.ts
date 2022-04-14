import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem: string = 'http://lorempixel.com.br/100/100/?1';

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  getBoolean(): boolean {
    return true;
  }

}
