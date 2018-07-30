import { Lingua } from "./lingua";
import { Gruppo } from "./gruppo";

export class Utente {
    utenteId?: number;
    login?: string;
    password?: string;
    nome?: string;
    cognome?: string;
    email?:string;
    telefono?: string;
    telefonoCell?: string;
    note?: string;
    stato?: boolean;
    dataScadenzaPassword?: Date;
    lingua: Lingua;
    
    gruppi: Gruppo[];
  
}