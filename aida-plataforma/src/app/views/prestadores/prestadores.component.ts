import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.css']
})
export class PrestadoresComponent implements OnInit {

   prestadorSchema = ({
    name: {
        type: String,
        require: true,
    },
    idade: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique:true,
        required: true,
        lowercase: true,
    },
    endereco: {
        type: String,
        require: false,
    },
    profissional: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    
    createAt:{
        type: Date,
        default: Date.now,
    },
    portfolio:{
        type: String,
        required: false,
    },
    av_prazo: {
        type: Number,
        require: false,
    },
    av_atendimento: {
        type: Number,
        require: false,
    },av_orcamento: {
        type: Number,
        require: false,
    },
    avaliacao_geral: {
        type: Number,
        require: false,
    },
    comentarios_clientes: {
        type: Number,
        require: false,
    }
});

  private principal:boolean = true;
  private prestador:Object = new Object();
  private urls = new Array<string>();
  private avGeral:Number = 0;
  constructor() { }

  ngOnInit() {
  }

  cadastro(){
    this.principal = false;
  }

  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
        console.log(this.urls);
      }
    }
  }

}
