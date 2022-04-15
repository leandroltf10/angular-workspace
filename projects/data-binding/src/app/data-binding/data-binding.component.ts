import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem: string = 'http://lorempixel.com.br/100/100/?1';
  valorAtual: string = '';
  valorSalvo: string | undefined = '';
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  getBoolean(): boolean {
    return true;
  }

  botaoClicado() {
    alert('botão clicado');
  }

  onKeyUp(valor: string) {
    this.valorAtual = valor;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
