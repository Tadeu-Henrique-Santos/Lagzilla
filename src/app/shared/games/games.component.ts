import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Game {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  plataforma: string;
  genero: string;
}

@Component({
  selector: 'app-games',
   standalone: true,
  imports: [ CommonModule,FormsModule, ],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  jogos: Game[] = [];

  ngOnInit(): void {
    this.carregarJogos();
  }

  carregarJogos(): void {
    // Dados mockados - substitua por chamada HTTP real se necessário
    this.jogos = [
      {
        id: 1,
        nome: 'The Witcher 3: Wild Hunt',
        preco: 79.90,
        imagem: 'https://via.placeholder.com/300x400?text=The+Witcher+3',
        plataforma: 'PC, PS4, Xbox One',
        genero: 'RPG'
      },
      {
        id: 2,
        nome: 'Red Dead Redemption 2',
        preco: 129.90,
        imagem: 'https://via.placeholder.com/300x400?text=Red+Dead+2',
        plataforma: 'PC, PS4, Xbox One',
        genero: 'Ação/Aventura'
      },
      {
        id: 3,
        nome: 'Cyberpunk 2077',
        preco: 99.90,
        imagem: 'https://via.placeholder.com/300x400?text=Cyberpunk',
        plataforma: 'PC, PS5, Xbox Series X',
        genero: 'RPG'
      }
    ];
  }
}