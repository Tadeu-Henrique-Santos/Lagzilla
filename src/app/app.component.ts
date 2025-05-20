import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent,
    FooterComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAGZILLA';
  nome = 'Jogador';
  textoBotao: string = 'clique aqui!';
  mensagem: string = '';
  sobrenome: string = '';

  // Dados dos jogos (substitua pelas suas imagens)
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

  onBotaoClicado() {
    this.mensagem = `Olá ${this.nome} ${this.sobrenome}!`;
  }
}
