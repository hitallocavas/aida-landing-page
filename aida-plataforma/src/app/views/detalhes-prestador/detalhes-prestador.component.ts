import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AidaService } from 'src/app/aida-service/aida-service.component';

@Component({
  selector: 'app-detalhes-prestador',
  templateUrl: './detalhes-prestador.component.html',
  styleUrls: ['./detalhes-prestador.component.css']
})
export class DetalhesPrestadorComponent implements OnInit {

  private id:String = "";
  private prestador:Object = new Object();
  constructor(private route: ActivatedRoute,
              private aidaService:AidaService) { }

  ngOnInit() {

    this.route.params.subscribe(data =>{
      this.id = data["id"]
    });

    var aidi:Object = new Object();
    aidi["id"] = this.id;
    console.log(aidi);
    this.aidaService.getPrestadorById(this.id).then(
      data => console.log(data)
    )

  }

}
