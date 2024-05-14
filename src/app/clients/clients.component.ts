import { Component } from '@angular/core';
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  //public products: any;
  public clients: any;
  public keyword: string="";

  constructor( private clientService:  ClientService) {
  }

  ngOnInit(): void {

    this.clients = [
      {"id": 1, "name": "Computer", "price": 2345},
      {"id": 2, "name": "Clavier", "price": 60},
      {"id": 3, "name": "GPU", "price": 120}
    ]


    this.clientService.getCLients()
      .subscribe(
        {
          next: data =>{
            this.clients = data;
          },
          error:err => {
            console.log(err);
          }
        })

  }

  title = 'customerFrontEnd';

  deleteProduct(p: any) {
    let index = this.clients.indexOf(p);
    this.clients.splice(index,1);
  }

  search() {
    console.log(this.keyword);
    let result:any[] = [];
    for(let p of this.clients){
      if(p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.clients = result;


  }
}
