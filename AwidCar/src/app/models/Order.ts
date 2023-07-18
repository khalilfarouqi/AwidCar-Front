import { City } from "../enums/city.enum";

export interface Order {
    id?: number;
	country: string;
	bookingCity: City;
	returnCity: City;
	startDate: Date;
	endDate: Date;
	clientAge: number;
	typeInsurance: string;
	orderStatus: string;
}