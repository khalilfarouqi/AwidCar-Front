import { Component } from '@angular/core';
import { ClientService } from '../service/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent {

  clients: any = [];
  router: any;

  constructor(private clientService: ClientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getClientById(params["id"]);
     })
  }
  
  public getClientById(id :number){
    this.clientService.getClientById(id).subscribe((result) => { 
      this.clients = result;
      console.log(result)
    })
  }

}
