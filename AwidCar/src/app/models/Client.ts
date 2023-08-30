import { Gender } from "../enums/Gender.enum";
import { City } from "../enums/city.enum";

export interface Client {
    id?: number;
	Image: string;
	FirstName: string;
	LastName: string;
	Gender: Gender;
	Age: number;
	Adress: string;
	Tel: string;
	City: City;
	Country: string;
	CIN: string;
	Licence: string;
	DateLicence: Date;
	DateCreation: Date;
	Email: string;
	VolNumber: number;
}