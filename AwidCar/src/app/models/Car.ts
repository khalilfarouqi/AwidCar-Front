import { Brande } from "../enums/Brande.enum";
import { Fuel } from "../enums/Fuel.enum";
import { GearBox } from "../enums/GearBox.enum";
import { Style } from "../enums/Style.enum";
import { Photo } from "./Photo";

export interface Car {
    id?: number;
	name: string;
	Brande: Brande;
	Matricule: string;
	Mileage: number;
	Model: number;
	HorsPower: number;
	Consumption: number;
	fuel: Fuel;
	Bluetooth: boolean;
	AirBag: boolean;
	gearBox: GearBox;
	Seat: number;
	Door: number;
	Style: Style;
	bootSize: number;
	Price: number;
	Rate: number;
	CDM: boolean;
	ProtectionVol: boolean;
	RespoCivile: boolean;
	BrisGlacePneus: boolean;
	photo: Number;
}