
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'LAGZILLA';
  nome = 'Jogador';
  isEditable = true;
	isUnchanged = true;
  textoBotao: string = 'Clique aqui!';
  botaoDesabilitado: boolean = false;
  mensagem: string = 'Digitando Texto...'; 
  sobrenome: any;
  cidade: any;
  onBotaoClicado() {
       this.mensagem = 'Você é um cara 10!!';
  }
  // Dados dos jogos 
  jogos = [
    {
      nome: 'Cyberpunk 2077',
      preco: 199.90,
      imagem: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
    },
    {
      nome: 'Elden Ring',
      preco: 249.90,
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/Elden_Ring_capa.jpg/330px-Elden_Ring_capa.jpg'
    },
    {
      nome: 'God of War',
      preco: 159.90,
      imagem: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg'
    },
    {
      nome: 'The Witcher 3',
      preco: 79.90,
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png'
    },
    {
      nome: 'Horizon Zero Dawn',
      preco: 129.90,
      imagem: 'https://upload.wikimedia.org/wikipedia/en/9/93/Horizon_Zero_Dawn.jpg'
    },
    {
      nome: 'Starfield',
      preco: 299.90,
      imagem: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Bethesda_Starfield.jpg'
    }
  ];
}