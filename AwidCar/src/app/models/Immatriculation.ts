
export interface Immatriculation {
    id?: number;
	carNumber: number;
	series: string;
	prefectureRef: {
        id: number;
    };
}