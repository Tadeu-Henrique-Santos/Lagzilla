import { Routes } from '@angular/router';
import { GamesComponent } from './shared/games/games.component';

export const routes: Routes = [
  { 
    path: 'jogos',  // Isso deve corresponder ao link do seu menu
    component: GamesComponent,
    title: 'Todos os Jogos'
  },
  // ... outras rotas
];

