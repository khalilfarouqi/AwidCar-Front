import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  
  constructor(private clientService: ClientService) { }

  clients: any = [];

  ngOnInit(): void {
    this.getClient();
  }

  public getClient(){
    this.clientService.getAllClient().subscribe((result) => {
      this.clients = result;
      console.log(result)
    })
  }

}
