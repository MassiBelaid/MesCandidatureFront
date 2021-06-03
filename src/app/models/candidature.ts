import { Etape } from "./etape";

export class Candidature {
    id: number;
    companyName: string;
    titreOffre: string;
    lieu: string;
    url: string;
    contain: string;
    annonceDate: Date;
    candidatureDate: Date;
    candidatureSouce: string;
    status: string;
    etapes: Etape[];
}