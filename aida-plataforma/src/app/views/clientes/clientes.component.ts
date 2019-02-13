import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  principal:Boolean = true;
  cliente:Object = new Object();
  private urls = new Array<String>();

  constructor() { }

  ngOnInit() {

  }

  adicionarCliente(){
    this.principal = false;
  }

  confirmarCadastro(){

  }

  
  private detectFiles(event) {
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
