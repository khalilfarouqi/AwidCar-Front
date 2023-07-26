import { Component} from '@angular/core';
import { Brande } from '../enums/Brande.enum';
import { Fuel } from '../enums/Fuel.enum';
import { GearBox } from '../enums/GearBox.enum';
import { Style } from '../enums/Style.enum';

@Component({
  selector: 'app-car-editeur',
  templateUrl: './car-editeur.component.html',
  styleUrls: ['./car-editeur.component.scss']
})
export class CarEditeurComponent {

  brandes = Object.values(Brande);
  fuels = Object.values(Fuel);
  gearboxs = Object.values(GearBox);
  styles = Object.values(Style);

}
