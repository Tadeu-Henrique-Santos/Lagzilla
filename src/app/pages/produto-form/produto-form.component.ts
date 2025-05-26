import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Produto } from '../../types/produto';
import { ProdutoService } from '../../core/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-produto-form',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {
  titulo = 'Cadastro de Produtos';
  produtoId?: number;
  produto: Produto = {} as Produto;
  constructor(
      private service: ProdutoService,
      private router: Router,
      private route: ActivatedRoute
    ) {
      //Verifico se é alteração ou inclusão
      this.produtoId = Number(this.route.snapshot.params['id']);
      if (this.produtoId) {
        service.buscarPorId(this.produtoId).subscribe((produto) => {
          if (produto) {
            this.produto.id = produto.id;
            this.produto.nome = produto.nome;
            this.produto.descricao = produto.descricao;
          }
        });
      }
    }
  /*
    formulario = new FormGroup({
    id: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    nome: new FormControl('',
      [Validators.required, Validators.minLength(3),  Validators.maxLength(60)]),
    descricao: new FormControl('',
      [Validators.required, Validators.minLength(10), Validators.maxLength(200)])
  }  
)
  onSubmit() {
    this.submeter()
      alert('Formulário enviado com sucesso!\n' + 
        JSON.stringify(this.formulario.value));
    }    
  */
  cancelar() {
      this.router.navigate(['/produtos']);
  }  
  submeter() {
    if (this.produtoId) {
      this.service.editar(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
      });
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
      });
    }
  }
}