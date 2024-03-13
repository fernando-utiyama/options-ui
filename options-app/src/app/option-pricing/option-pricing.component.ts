import { Component } from '@angular/core';

@Component({
  selector: 'app-option-pricing',
  standalone: true,
  imports: [],
  templateUrl: './option-pricing.component.html',
  styleUrl: './option-pricing.component.css'
})
export class OptionPricingComponent {
  s: number; // Preço do ativo subjacente
  k: number; // Preço de exercício
  t: number; // Tempo até a expiração
  r: number; // Taxa de juros livre de risco
  v: number; // Volatilidade

  result: number; // Resultado da precificação

  constructor() { }

  // Função que calcula o preço de uma opção de compra (call option) usando o modelo Black-Scholes
  calculateOptionPrice(): void {
    let d1 = (Math.log(this.s / this.k) + (this.r + this.v * this.v / 2) * this.t) / (this.v * Math.sqrt(this.t));
    let d2 = d1 - this.v * Math.sqrt(this.t);

    let callPrice = this.s * this.normSDist(d1) - this.k * Math.exp(-this.r * this.t) * this.normSDist(d2);
    this.result = callPrice;
  }

  // Função para calcular a distribuição normal cumulativa
  normSDist(z: number): number {
    return (1.0 + Math.erf(z / Math.sqrt(2.0))) / 2.0;
  }
}
