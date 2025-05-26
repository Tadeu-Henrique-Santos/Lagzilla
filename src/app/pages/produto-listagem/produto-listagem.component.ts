
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../types/produto';
@Component({
    selector: 'app-produto-listagem',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './produto-listagem.component.html',
    styleUrl: './produto-listagem.component.css'
})
export class ProdutoListagemComponent implements OnInit {
    listaProdutos: Produto[] = [];
    constructor(
        private service: ProdutoService,
        private router: Router
    ) { }
    ngOnInit(): void {
        this.service.listar().subscribe((produtos) => {
            this.listaProdutos = produtos;
        });
    }
    excluir(id: number) {
        if (id) {
            this.service.excluir(id).subscribe(() => {
                window.location.reload()
            })
        }
    }
    incluir() {
        this.router.navigate(['produtos/incluir']);
    }
}
