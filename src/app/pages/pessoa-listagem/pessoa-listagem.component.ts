
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../core/services/pessoa.service';
import { Router, RouterModule } from '@angular/router';
import { Pessoa } from '../../types/types';
@Component({
    selector: 'app-pessoa-listagem',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './pessoa-listagem.component.html',
    styleUrl: './pessoa-listagem.component.css'
})
export class PessoaListagemComponent implements OnInit {

    listaPessoas: Pessoa[] = [];
    constructor(
        private service: PessoaService,
        private router: Router
    ) { }
    ngOnInit(): void {
        this.service.listar().subscribe((pessoas) => {
            this.listaPessoas = pessoas;
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
        this.router.navigate(['pessoas/incluir']);
    }
}
