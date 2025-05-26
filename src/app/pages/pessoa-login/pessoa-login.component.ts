import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pessoa-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './pessoa-login.component.html',
  styleUrl: './pessoa-login.component.css'
})
export class PessoaLoginComponent {
pessoas: any;
  constructor(private router: Router){}
  onBotaoClicado() {
    if(this.login=="Marcos" && this.senha=="123"){
      alert("Login com sucesso!!!");
      this.router.navigate(['pessoas']);
    }
    else{
      alert("Usuário ou senha inválidos!!!");
    }
  }
    titulo: any;
    login: any;
    senha: any;
    botaoDesabilitado: any;
}

