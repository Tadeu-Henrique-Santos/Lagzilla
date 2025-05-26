import { Routes } from '@angular/router';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProdutoFormComponent } from './pages/produto-form/produto-form.component';
import { ProdutoListagemComponent } from './pages/produto-listagem/produto-listagem.component';
export const routes: Routes = [
    
     {
        path: '',
        component: PessoaLoginComponent,
        title: 'Login',
    },
    {
        path: 'header',
        component: HeaderComponent,
        title: 'Página Inicial',
    },
    {
        path: 'pessoas',
        component: PessoaListagemComponent,
        title: 'Listagem de Pessoas',
    },
    {
        path: 'produtos', //Listagem de produtos
        component: ProdutoListagemComponent,
        title: 'Listagem de Produtos',
    },
    {
        path: 'pessoas/incluir',
        component: PessoaFormComponent,
        title: 'Pessoas - Incluir',
    },
    {
        path: 'pessoas/alterar/:id',
        component: PessoaFormComponent,
        title: 'Pessoas - Alterar',
    },
    {
        path: 'produtos/alterar/:id',
        component: ProdutoFormComponent,
        title: 'Produtos - Alterar',
    },
    {
        path: 'produtos/incluir',
        component: ProdutoFormComponent,
        title: 'Formulário de Cadastro de Produtos',
    },
    { path: '**', redirectTo: 'pessoas' }
];
