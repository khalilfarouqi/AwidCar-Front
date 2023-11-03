import { Component } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchs: any = [];
  label: any;

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {}

  public getSearch(label :string){
    this.navbarService.getSearch(label).subscribe((result) => {
      this.searchs = result;
    })
  }

}
